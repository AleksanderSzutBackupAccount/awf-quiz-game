// One-off: emit an incremental migration that upserts ONLY the `rekreacja`
// specialization topics into public.topics. Needed because the base content
// migration (20260625120000_topics_content.sql) was already applied to existing
// databases, so editing it in place does NOT re-run on `supabase migration up` /
// `db push`. A new migration with a later timestamp does. Surgical (rekreacja
// rows only) so it can't revert the earlier answer-rebalance migrations.
// Run: node scripts/gen-rekreacja-migration.mjs
import { createJiti } from 'jiti'
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const jiti = createJiti(import.meta.url)

const mod = await jiti.import(resolve(__dirname, '../app/content/topics.ts'))
const rows = mod.topics
  .filter((t) => t.track === 'rekreacja')
  .map((t) => ({
    id: t.id,
    track: t.track,
    category: t.category,
    number: t.number,
    title: t.title,
    summary: t.summary ?? '',
    wiki: t.wiki ?? [],
    questions: t.questions ?? [],
  }))

if (rows.length !== 30) throw new Error(`Expected 30 rekreacja topics, got ${rows.length}`)

const json = JSON.stringify(rows)
const TAG = '$awfjson$'
if (json.includes(TAG)) throw new Error('Dollar-quote tag collides with content')

const sql = `-- ============================================================================
-- Seeds the 'Rekreacja' specialization topics (track = 'rekreacja') into
-- public.topics. Incremental migration: the base content migration was already
-- applied to existing DBs, so this later-timestamped file is what actually
-- delivers the new rows on \`supabase migration up\` / \`db push\`. Upsert, scoped
-- to rekreacja only — does not touch the other ${'tracks'} or rebalanced answers.
-- ${rows.length} topics.
-- ============================================================================

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

const out = resolve(__dirname, '../supabase/migrations/20260626090000_rekreacja_topics.sql')
writeFileSync(out, sql)
console.log(`Wrote ${out} (${rows.length} topics, ${(sql.length / 1024).toFixed(1)} kB)`)
