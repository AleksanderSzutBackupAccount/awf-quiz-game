-- ============================================================================
-- AWF Licencjat — auth: device sessions (max 2 devices, evict oldest) + progress
-- ============================================================================

-- ---------------------------------------------------------------------------
-- device_sessions: one row per (user, device). Max 2 kept per user.
-- ---------------------------------------------------------------------------
create table if not exists public.device_sessions (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references auth.users (id) on delete cascade,
  device_id    text not null,
  user_agent   text,
  created_at   timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  unique (user_id, device_id)
);

create index if not exists device_sessions_user_lastseen_idx
  on public.device_sessions (user_id, last_seen_at desc);

alter table public.device_sessions enable row level security;

-- Users may only see/manage their own device rows (RPCs below are SECURITY DEFINER).
create policy "device_sessions_select_own" on public.device_sessions
  for select using (auth.uid() = user_id);
create policy "device_sessions_modify_own" on public.device_sessions
  for delete using (auth.uid() = user_id);

-- Max concurrent devices per user.
create or replace function public.max_devices()
returns int language sql immutable as $$ select 2 $$;

-- ---------------------------------------------------------------------------
-- register_device: claim a device slot on login. Inserts/updates this device,
-- then keeps only the N most-recently-active devices, evicting the oldest.
-- Returns true if THIS device is within the allowed set after enforcement.
-- ---------------------------------------------------------------------------
create or replace function public.register_device(p_device_id text, p_user_agent text default null)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
  still_active boolean;
begin
  if uid is null then
    raise exception 'not authenticated';
  end if;

  insert into public.device_sessions (user_id, device_id, user_agent, created_at, last_seen_at)
  values (uid, p_device_id, p_user_agent, now(), now())
  on conflict (user_id, device_id)
  do update set last_seen_at = now(),
                user_agent = coalesce(excluded.user_agent, public.device_sessions.user_agent);

  -- Evict everything beyond the N most-recently-active devices (oldest get logged out).
  delete from public.device_sessions ds
  where ds.user_id = uid
    and ds.id not in (
      select id from public.device_sessions
      where user_id = uid
      order by last_seen_at desc, created_at desc
      limit public.max_devices()
    );

  select exists(
    select 1 from public.device_sessions
    where user_id = uid and device_id = p_device_id
  ) into still_active;

  return still_active;
end;
$$;

-- ---------------------------------------------------------------------------
-- touch_device: heartbeat + liveness check. Updates last_seen WITHOUT
-- re-inserting (so an evicted device is NOT resurrected). Returns whether the
-- device is still an active slot; false => the client must sign out.
-- ---------------------------------------------------------------------------
create or replace function public.touch_device(p_device_id text)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
  affected int;
begin
  if uid is null then
    return false;
  end if;

  update public.device_sessions
    set last_seen_at = now()
    where user_id = uid and device_id = p_device_id;

  get diagnostics affected = row_count;
  return affected > 0;
end;
$$;

-- ---------------------------------------------------------------------------
-- unregister_device: explicit logout of the current device.
-- ---------------------------------------------------------------------------
create or replace function public.unregister_device(p_device_id text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare uid uuid := auth.uid();
begin
  if uid is null then return; end if;
  delete from public.device_sessions where user_id = uid and device_id = p_device_id;
end;
$$;

-- ---------------------------------------------------------------------------
-- user_progress: per-user learning progress (XP, mastery, history) as JSONB.
-- ---------------------------------------------------------------------------
create table if not exists public.user_progress (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.user_progress enable row level security;

create policy "user_progress_select_own" on public.user_progress
  for select using (auth.uid() = user_id);
create policy "user_progress_insert_own" on public.user_progress
  for insert with check (auth.uid() = user_id);
create policy "user_progress_update_own" on public.user_progress
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end;
$$;

create trigger user_progress_set_updated_at
  before update on public.user_progress
  for each row execute function public.set_updated_at();

-- Allow authenticated users to call the RPCs.
grant execute on function public.register_device(text, text) to authenticated;
grant execute on function public.touch_device(text) to authenticated;
grant execute on function public.unregister_device(text) to authenticated;
