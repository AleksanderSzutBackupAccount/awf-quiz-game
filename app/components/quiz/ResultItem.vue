<script setup lang="ts">
import type { SessionItem, AnswerRecord } from '~/stores/quiz'

const props = defineProps<{ item: SessionItem; answer: AnswerRecord }>()

const q = computed(() => props.item.question)

const givenText = computed(() => {
  const a = props.answer
  if (q.value.type === 'abcd' && typeof a.given === 'number')
    return q.value.options[a.given] ?? '—'
  if (q.value.type === 'tf' && typeof a.given === 'boolean')
    return a.given ? 'Prawda' : 'Fałsz'
  if (q.value.type === 'flash') return a.given === 'review' ? 'Do powtórki' : '—'
  return 'Brak odpowiedzi'
})

const correctText = computed(() => {
  if (q.value.type === 'abcd') return q.value.options[q.value.correct]
  if (q.value.type === 'tf') return q.value.correct ? 'Prawda' : 'Fałsz'
  return ''
})

const prompt = computed(() =>
  q.value.type === 'flash' ? q.value.front : q.value.q
)
const explain = computed(() =>
  q.value.type === 'flash' ? q.value.back : q.value.explain
)
</script>

<template>
  <GlassCard class="ri" :class="{ ok: answer.correct }">
    <div class="ri-head">
      <span class="badge" :class="answer.correct ? 'b-ok' : 'b-bad'">
        {{ answer.correct ? '✓ Dobrze' : '✕ Do powtórki' }}
      </span>
      <span class="chip ri-topic">{{ item.topicTitle }}</span>
    </div>

    <p class="ri-q">{{ prompt }}</p>

    <div v-if="!answer.correct && q.type !== 'flash'" class="ri-answers">
      <p class="line bad"><span class="lbl">Twoja odpowiedź:</span> {{ givenText }}</p>
      <p class="line ok"><span class="lbl">Poprawna:</span> {{ correctText }}</p>
    </div>

    <p class="ri-explain muted">
      <strong>{{ q.type === 'flash' ? 'Odpowiedź:' : 'Wyjaśnienie:' }}</strong>
      {{ explain }}
    </p>

    <NuxtLink :to="`/wiki/${item.topicId}`" class="ri-wiki">
      📖 Przejdź do wiki →
    </NuxtLink>
  </GlassCard>
</template>

<style scoped>
.ri { display: flex; flex-direction: column; gap: 0.7rem; border-left: 3px solid var(--bad); }
.ri.ok { border-left-color: var(--ok); }
.ri-head { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; justify-content: space-between; }
.badge { font-weight: 700; font-size: var(--fs-sm); padding: 0.25rem 0.7rem; border-radius: 999px; }
.b-ok { background: var(--ok-bg); color: var(--ok); }
.b-bad { background: var(--bad-bg); color: var(--bad); }
.ri-topic { font-size: var(--fs-xs); }
.ri-q { font-weight: 600; font-size: var(--fs-base); }
.ri-answers { display: flex; flex-direction: column; gap: 0.3rem; font-size: var(--fs-sm); }
.line .lbl { color: var(--text-3); margin-right: 0.4rem; }
.line.bad { color: var(--bad); }
.line.ok { color: var(--ok); }
.ri-explain { font-size: var(--fs-sm); }
.ri-wiki { align-self: flex-start; font-weight: 700; color: var(--accent); font-size: var(--fs-sm); }
.ri-wiki:hover { text-decoration: underline; }
</style>
