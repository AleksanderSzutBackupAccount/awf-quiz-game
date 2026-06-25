-- ============================================================================
-- Leaderboard: per-user display name + a per-specialization ranking RPC.
-- Additive; touches no existing rows or other tables' RLS. Exposes ONLY
-- (display_name, xp, is_me) for approved, named users.
-- ============================================================================

alter table public.profiles add column if not exists display_name text;

-- Set the caller's own display name (profiles has no user UPDATE policy by
-- design; SECURITY DEFINER keeps the approved flag untouchable). Trims, caps at
-- 40 chars, empty -> null (removes the name).
create or replace function public.set_display_name(p_name text)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
  clean text;
begin
  if uid is null then raise exception 'not authenticated'; end if;
  clean := nullif(btrim(p_name), '');
  if clean is not null then clean := left(clean, 40); end if;
  update public.profiles set display_name = clean where user_id = uid;
  return clean;
end;
$$;

grant execute on function public.set_display_name(text) to authenticated;

-- Per-specialization leaderboard. Caller must be approved. Returns only approved
-- users who have set a name, ordered by that specialization's XP (read from the
-- client-authored user_progress snapshot). is_me marks the caller's own row.
create or replace function public.get_leaderboard(p_spec text)
returns table (display_name text, xp int, is_me boolean)
language sql
stable
security definer
set search_path = public
as $$
  select p.display_name,
         coalesce(nullif(up.data->'xpBySpec'->>p_spec, '')::int, 0) as xp,
         (p.user_id = auth.uid()) as is_me
  from public.profiles p
  left join public.user_progress up on up.user_id = p.user_id
  where public.is_approved()
    and p.approved = true
    and p.display_name is not null
  order by xp desc, p.display_name asc;
$$;

grant execute on function public.get_leaderboard(text) to authenticated;
