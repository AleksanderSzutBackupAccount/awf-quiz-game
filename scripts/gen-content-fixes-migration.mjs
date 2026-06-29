// One-off: emit an incremental migration that upserts the topics changed by the
// content-verification pass — (a) the swapped exam numbers #58/#59
// (style-historyczne-zabytki ↔ planowanie-przestrzenne) restored to match the
// source numbering, and (b) six de-duplicated quiz questions across the common
// and specialization tracks (koncepcje-motywacyjne #2, fizjologiczne-podstawy-
// treningu #11, metody-badania-rynku-turystycznego #35, roznice-konflikty-
// kulturowe przygodowa#20, rek-rekreacja-a-rozwiazywanie-konfliktow rekreacja#23,
// rek-zachowania-zdrowotne rekreacja#27). A later-timestamped migration is needed
// because the base content + earlier incremental migrations were already applied
// to existing DBs, so editing the TS in place does NOT re-run on
// `supabase migration up` / `db push`. Upsert, scoped to these rows only.
// Run: node scripts/gen-content-fixes-migration.mjs
import { createJiti } from 'jiti'
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const jiti = createJiti(import.meta.url)

const IDS = [
  'style-historyczne-zabytki', // #59 -> #58 (number swap)
  'planowanie-przestrzenne', // #58 -> #59 (number swap)
  'koncepcje-motywacyjne', // #2  Q3 de-duplicated (Maslow apex vs #4)
  'fizjologiczne-podstawy-treningu', // #11 Q2 de-duplicated (resting HR vs #14)
  'metody-badania-rynku-turystycznego', // #35 Q2 de-duplicated (primary/secondary vs #25)
  'roznice-konflikty-kulturowe', // przygodowa #20 Q4 de-duplicated (etnocentryzm vs #41)
  'miekkie-formy-aktywnosci-terenowej', // przygodowa #11 Q1 de-duplicated (miękkie=niskie ryzyko vs #25 Q3)
  'rek-rekreacja-a-rozwiazywanie-konfliktow', // rekreacja #23 Q1 de-duplicated (katartyczna vs #1)
  'rek-zachowania-zdrowotne', // rekreacja #27 Q2 de-duplicated (sleep hours vs #43)
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
-- Upserts the topics changed by the content-verification pass:
--   * #58/#59 exam-number swap restored to match the source bank
--     (style-historyczne-zabytki -> 58, planowanie-przestrzenne -> 59)
--   * six de-duplicated quiz questions (one per: koncepcje-motywacyjne #2,
--     fizjologiczne-podstawy-treningu #11, metody-badania-rynku-turystycznego
--     #35, roznice-konflikty-kulturowe przygodowa#20,
--     rek-rekreacja-a-rozwiazywanie-konfliktow rekreacja#23,
--     rek-zachowania-zdrowotne rekreacja#27).
-- Incremental migration: base + earlier migrations were already applied to
-- existing DBs, so this later-timestamped file is what delivers the fixes on
-- \`supabase migration up\` / \`db push\`. Upsert, scoped to these ${rows.length} rows only.
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

const out = resolve(__dirname, '../supabase/migrations/20260629130000_content_fixes.sql')
writeFileSync(out, sql)
console.log(`Wrote ${out} (${rows.length} rows, ${(sql.length / 1024).toFixed(1)} kB)`)
