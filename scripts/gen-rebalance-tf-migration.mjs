// Generates a DATA-ONLY migration that rebalances the True/False answers (which
// were ~85% "Prawda"). Mirrors gen-rebalance migration shape: updates only
// wiki + questions for existing topics in place, leaves table/RLS/seed untouched,
// idempotent. Run: node scripts/gen-rebalance-tf-migration.mjs
import { createJiti } from 'jiti'
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const jiti = createJiti(import.meta.url)

const mod = await jiti.import(resolve(__dirname, '../app/content/topics.ts'))
const topics = mod.topics
if (!Array.isArray(topics) || !topics.length) throw new Error('No topics loaded')

const rows = topics.map((t) => ({ id: t.id, wiki: t.wiki ?? [], questions: t.questions ?? [] }))
const json = JSON.stringify(rows)
const TAG = '$awfjson$'
if (json.includes(TAG)) throw new Error('Dollar-quote tag collides with content')

const sql = `-- ============================================================================
-- Rebalansuje odpowiedzi w pytaniach Prawda/Fałsz (wcześniej ~85% odpowiedzi to
-- „Prawda"). Część zdań przepisano tak, by były faktycznie fałszywe, a pole
-- explain wyjaśnia błąd — docelowo ~50/50. Wygenerowane z app/content/topics.ts.
-- Tylko wiki + questions — pozostałe pola tematów bez zmian. Idempotentne.
-- ============================================================================

update public.topics as t set
  wiki = x.wiki,
  questions = x.questions
from jsonb_to_recordset(${TAG}${json}${TAG}::jsonb)
  as x(id text, wiki jsonb, questions jsonb)
where t.id = x.id;
`

const out = resolve(__dirname, '../supabase/migrations/20260625160000_rebalance_tf_answers.sql')
writeFileSync(out, sql)
console.log(`Wrote ${out} (${rows.length} topics, ${(sql.length / 1024).toFixed(1)} kB)`)
