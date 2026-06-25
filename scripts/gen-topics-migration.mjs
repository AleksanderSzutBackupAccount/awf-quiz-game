// Generates a Supabase migration that creates the `topics` table (RLS: approved
// users only) and seeds it from app/content/topics.ts. Run: node scripts/gen-topics-migration.mjs
import { createJiti } from 'jiti'
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const jiti = createJiti(import.meta.url)

const mod = await jiti.import(resolve(__dirname, '../app/content/topics.ts'))
const topics = mod.topics

if (!Array.isArray(topics) || !topics.length) {
  throw new Error('No topics loaded')
}

const rows = topics.map((t) => ({
  id: t.id,
  track: t.track,
  category: t.category,
  number: t.number,
  title: t.title,
  summary: t.summary ?? '',
  wiki: t.wiki ?? [],
  questions: t.questions ?? [],
}))

const json = JSON.stringify(rows)
const TAG = '$awfjson$'
if (json.includes(TAG)) throw new Error('Dollar-quote tag collides with content')

const sql = `-- ============================================================================
-- Knowledge base content moved to the DB. RLS: only authenticated + APPROVED
-- users can read it (so the content is NOT downloadable without an active
-- account). Generated from app/content/topics.ts by scripts/gen-topics-migration.mjs.
-- ${rows.length} topics.
-- ============================================================================

create table if not exists public.topics (
  id        text primary key,
  track     text not null,
  category  text not null,
  number    int  not null,
  title     text not null,
  summary   text,
  wiki      jsonb not null default '[]'::jsonb,
  questions jsonb not null default '[]'::jsonb
);

alter table public.topics enable row level security;

drop policy if exists topics_select_approved on public.topics;
create policy topics_select_approved on public.topics
  for select using ( public.is_approved() );

grant select on public.topics to authenticated;

insert into public.topics (id, track, category, number, title, summary, wiki, questions)
select id, track, category, number, title, summary, wiki, questions
from jsonb_to_recordset(${TAG}${json}${TAG}::jsonb)
  as x(id text, track text, category text, number int, title text, summary text, wiki jsonb, questions jsonb)
on conflict (id) do update set
  track = excluded.track,
  category = excluded.category,
  number = excluded.number,
  title = excluded.title,
  summary = excluded.summary,
  wiki = excluded.wiki,
  questions = excluded.questions;
`

const out = resolve(__dirname, '../supabase/migrations/20260625120000_topics_content.sql')
writeFileSync(out, sql)
console.log(`Wrote ${out} (${rows.length} topics, ${(sql.length / 1024).toFixed(1)} kB)`)
