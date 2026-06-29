// One-off: emit an incremental migration that upserts the common ('wszyscy')
// topics that were missing from the originally-shipped content — exam questions
// #20, #27, #55 — plus the de-duplicated #2 (koncepcje-motywacyjne, whose first
// quiz question was rewritten so it no longer mirrors #4). Needed because the
// base content migration (20260625120000_topics_content.sql) was already applied
// to existing databases, so editing it in place does NOT re-run on
// `supabase migration up` / `db push`. A new migration with a later timestamp
// does. Scoped to these rows only so it can't revert other content.
// Run: node scripts/gen-missing-wszyscy-migration.mjs
import { createJiti } from 'jiti'
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const jiti = createJiti(import.meta.url)

const IDS = [
  'koncepcje-motywacyjne', // de-duplicated quiz question
  'model-zachowan-rynkowych-konsumentow', // #20
  'mobbing-osobowosc-autorytarna', // #27
  'uwarunkowania-rozwoju-turystyki', // #55
]

const mod = await jiti.import(resolve(__dirname, '../app/content/topics.ts'))
const byId = new Map(mod.topics.map((t) => [t.id, t]))
const rows = IDS.map((id) => {
  const t = byId.get(id)
  if (!t) throw new Error(`Topic not found: ${id}`)
  return {
    id: t.id,
    track: t.track,
    category: t.category,
    number: t.number,
    title: t.title,
    summary: t.summary ?? '',
    wiki: t.wiki ?? [],
    questions: t.questions ?? [],
  }
})

const json = JSON.stringify(rows)
const TAG = '$awfjson$'
if (json.includes(TAG)) throw new Error('Dollar-quote tag collides with content')

const sql = `-- ============================================================================
-- Upserts the common ('wszyscy') topics missing from the originally-shipped
-- content (exam questions #20, #27, #55) plus the de-duplicated #2
-- (koncepcje-motywacyjne). Incremental migration: the base content migration was
-- already applied to existing DBs, so this later-timestamped file is what
-- actually delivers the rows on \`supabase migration up\` / \`db push\`. Upsert,
-- scoped to these ${rows.length} rows only — does not touch other content.
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

const out = resolve(__dirname, '../supabase/migrations/20260629120000_missing_wszyscy_topics.sql')
writeFileSync(out, sql)
console.log(`Wrote ${out} (${rows.length} rows, ${(sql.length / 1024).toFixed(1)} kB)`)
