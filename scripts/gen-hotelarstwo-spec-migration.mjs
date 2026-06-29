// One-off: emit an incremental migration that upserts the 30 hotelarstwo
// specialization topics ("Grupa przedmiotów specjalnościowych: Menedżer
// hotelarstwa i gastronomii", track 'hotelarstwo' / category 'hotelarstwo-spec',
// numbered 1..30) authored from baza/hotelarstwo.pdf. A later-timestamped
// migration is needed because the base + earlier migrations were already applied
// to existing DBs, so adding topics to the TS in place does NOT re-run on
// `supabase migration up` / `db push`. Upsert, scoped to the hot-* rows only.
// Run: node scripts/gen-hotelarstwo-spec-migration.mjs
import { createJiti } from 'jiti'
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const jiti = createJiti(import.meta.url)

const mod = await jiti.import(resolve(__dirname, '../app/content/topics.ts'))
const rows = mod.topics
  .filter((t) => t.track === 'hotelarstwo' && t.category === 'hotelarstwo-spec')
  .sort((a, b) => a.number - b.number)
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

if (rows.length !== 30) throw new Error(`Expected 30 hotelarstwo-spec topics, found ${rows.length}`)

const json = JSON.stringify(rows)
const TAG = '$awfjson$'
if (json.includes(TAG)) throw new Error('Dollar-quote tag collides with content')

const sql = `-- ============================================================================
-- Upserts the 30 HOTELARSTWO specialization topics ("Grupa przedmiotów
-- specjalnościowych: Menedżer hotelarstwa i gastronomii", numbered 1..30,
-- track 'hotelarstwo', category 'hotelarstwo-spec') authored from
-- baza/hotelarstwo.pdf. Incremental migration: base + earlier migrations were
-- already applied to existing DBs, so this later-timestamped file is what
-- delivers the new rows on \`supabase migration up\` / \`db push\`. Upsert,
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

const out = resolve(__dirname, '../supabase/migrations/20260629140000_hotelarstwo_spec_topics.sql')
writeFileSync(out, sql)
console.log(`Wrote ${out} (${rows.length} rows, ${(sql.length / 1024).toFixed(1)} kB)`)
