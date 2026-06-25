-- ============================================================================
-- On-demand content access layer (ADDITIVE / backward-compatible).
--   * topics_meta  – lightweight list (no wiki/questions), approved-gated
--   * get_topic    – full single topic (wiki + questions) on demand
--   * get_questions– questions for a set of topics (building a quiz) on demand
-- This migration only ADDS the view + RPCs; it does NOT revoke the existing
-- direct `select on topics`. So the currently-deployed frontend (which reads the
-- table directly) keeps working. The revoke is a separate, later migration
-- (..._revoke_topics_direct_select) to be applied AFTER the new frontend is live,
-- giving a zero-downtime cutover. User progress is unaffected either way.
-- ============================================================================

-- ---- Lightweight metadata view (runs as owner, gated by is_approved) ----
create or replace view public.topics_meta as
select
  t.id,
  t.track,
  t.category,
  t.number,
  t.title,
  t.summary,
  (select count(*) from jsonb_array_elements(t.questions) e where e->>'type' = 'abcd')::int  as abcd_count,
  (select count(*) from jsonb_array_elements(t.questions) e where e->>'type' = 'tf')::int    as tf_count,
  (select count(*) from jsonb_array_elements(t.questions) e where e->>'type' = 'flash')::int as flash_count
from public.topics t
where public.is_approved();

grant select on public.topics_meta to authenticated;

-- ---- Full single topic on demand ----
create or replace function public.get_topic(p_id text)
returns table (
  id text, track text, category text, number int,
  title text, summary text, wiki jsonb, questions jsonb
)
language sql
stable
security definer
set search_path = public
as $$
  select t.id, t.track, t.category, t.number, t.title, t.summary, t.wiki, t.questions
  from public.topics t
  where public.is_approved() and t.id = p_id;
$$;

grant execute on function public.get_topic(text) to authenticated;

-- ---- Questions for a set of topics (quiz building) on demand ----
-- Capped per call so a single request can never pull questions for the whole
-- base; the client batches larger quizzes into chunks.
create or replace function public.get_questions(p_ids text[])
returns table (id text, questions jsonb)
language plpgsql
stable
security definer
set search_path = public
as $$
begin
  if p_ids is null or array_length(p_ids, 1) is null then
    return;
  end if;
  if array_length(p_ids, 1) > 60 then
    raise exception 'too many topics requested (max 60)';
  end if;
  return query
    select t.id, t.questions
    from public.topics t
    where public.is_approved() and t.id = any(p_ids);
end;
$$;

grant execute on function public.get_questions(text[]) to authenticated;
