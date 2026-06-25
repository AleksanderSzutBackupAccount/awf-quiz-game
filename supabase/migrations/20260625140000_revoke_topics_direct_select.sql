-- ============================================================================
-- Cutover: remove clients' direct read access to the topics table, so the
-- knowledge base is reachable ONLY through the on-demand layer added in
-- 20260625130000_content_rpcs.sql (topics_meta / get_topic / get_questions).
--
-- ⚠️ DEPLOY ORDER MATTERS (zero-downtime):
--   1. Apply 20260625130000_content_rpcs.sql  (additive — old frontend still OK)
--   2. Deploy the NEW frontend (uses the view + RPCs, no direct table reads)
--   3. THEN apply THIS migration.
-- Applying this before the new frontend is live would make the old frontend's
-- `select on topics` fail (empty knowledge base until the new build ships).
-- It does NOT touch any data — user progress (user_progress + local cache,
-- keyed by topic id) is completely unaffected.
-- ============================================================================

-- No direct table access for clients (RLS on topics stays as defence-in-depth).
revoke select on public.topics from anon, authenticated;
