-- ============================================================================
-- Account approval gate: new accounts are inactive until manually approved.
-- Admin approves by setting profiles.approved = true (e.g. in Supabase Studio).
-- ============================================================================

create table if not exists public.profiles (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  email      text,
  approved   boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- Users may read ONLY their own profile (to see approval status).
-- There is intentionally NO insert/update policy for users, so nobody can
-- self-approve. Rows are created by the trigger below (SECURITY DEFINER), and
-- approval is granted by the service role / admin in the dashboard.
create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = user_id);

-- Auto-create an (unapproved) profile whenever a new auth user is created.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (user_id, email)
  values (new.id, new.email)
  on conflict (user_id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Convenience helper the client can call to check its own status.
create or replace function public.is_approved()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(
    (select approved from public.profiles where user_id = auth.uid()),
    false
  );
$$;

grant execute on function public.is_approved() to authenticated;

-- Backfill: ensure every existing user has a profile (inactive by default).
insert into public.profiles (user_id, email)
  select id, email from auth.users
  on conflict (user_id) do nothing;
