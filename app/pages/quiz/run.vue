<script setup lang="ts">
import { useQuizStore } from '~/stores/quiz'
import { useProgressStore } from '~/stores/progress'

const quiz = useQuizStore()
const progress = useProgressStore()
const router = useRouter()
const { confetti } = useCelebration()

// small dopamine burst near a correct answer
function celebrateCorrect() {
  confetti({ count: 28, power: 0.6, originY: window.innerHeight * 0.42 })
}

// Guard: no active session → back to setup (client-only; store is not persisted).
onMounted(() => {
  if (!quiz.hasSession) router.replace('/quiz')
  window.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))

const item = computed(() => quiz.current)
const q = computed(() => item.value?.question)

// local per-question state
const selectedIdx = ref<number | null>(null)
const selectedBool = ref<boolean | null>(null)
const revealed = ref(false)

watch(
  () => quiz.index,
  () => {
    selectedIdx.value = null
    selectedBool.value = null
    revealed.value = false
  }
)

function commit(given: number | boolean | 'known' | 'review', correct: boolean) {
  quiz.answer({ given, correct })
  if (item.value) progress.recordAnswer(item.value.topicId, correct, quiz.specialization ?? undefined)
}

function pickAbcd(i: number) {
  if (revealed.value || !q.value || q.value.type !== 'abcd') return
  selectedIdx.value = i
  revealed.value = true
  const correct = i === q.value.correct
  commit(i, correct)
  if (correct) celebrateCorrect()
}
function pickTf(val: boolean) {
  if (revealed.value || !q.value || q.value.type !== 'tf') return
  selectedBool.value = val
  revealed.value = true
  const correct = val === q.value.correct
  commit(val, correct)
  if (correct) celebrateCorrect()
}
function rateFlash(val: 'known' | 'review') {
  commit(val, val === 'known')
  if (val === 'known') celebrateCorrect()
  advance()
}

const isCorrect = computed(() => quiz.answers[quiz.index]?.correct ?? false)
const explain = computed(() =>
  q.value && q.value.type !== 'flash' ? q.value.explain : ''
)

function advance() {
  if (quiz.isLast) {
    finish()
  } else {
    quiz.next()
  }
}
function finish() {
  // record run summary
  if (quiz.specialization) {
    progress.recordRun({
      id: `${Date.now()}`,
      specialization: quiz.specialization,
      mode: quiz.mode,
      scopeLabel: quiz.scopeLabel,
      total: quiz.total,
      correct: quiz.score,
      date: Date.now(),
    })
  }
  quiz.finish()
  router.push('/quiz/results')
}

function onKey(e: KeyboardEvent) {
  if (!q.value) return
  const k = e.key.toLowerCase()
  if (q.value.type === 'abcd' && !revealed.value) {
    const map: Record<string, number> = { '1': 0, '2': 1, '3': 2, '4': 3, a: 0, b: 1, c: 2, d: 3 }
    if (k in map) { e.preventDefault(); pickAbcd(map[k]!) }
  } else if (q.value.type === 'tf' && !revealed.value) {
    if (['p', 't', '1'].includes(k)) { e.preventDefault(); pickTf(true) }
    else if (['f', 'n', '2'].includes(k)) { e.preventDefault(); pickTf(false) }
  }
  if (revealed.value && (k === 'enter' || k === ' ' || k === 'arrowright')) {
    e.preventDefault(); advance()
  }
}

function quit() {
  quiz.clear()
  router.push('/quiz')
}
</script>

<template>
  <section class="section container quiz-run">
    <div v-if="item && q" class="run-wrap">
      <!-- progress -->
      <div class="run-top">
        <button class="btn btn-ghost quit" @click="quit">✕ Zakończ</button>
        <span class="chip">{{ quiz.scopeLabel }}</span>
      </div>
      <ProgressBar
        :value="quiz.index + (revealed || quiz.mode === 'flash' ? 1 : 0)"
        :max="quiz.total"
        :label="`Pytanie ${quiz.index + 1} z ${quiz.total}`"
      />

      <GlassCard strong class="run-card">
        <div :key="quiz.index" class="q-anim">
          <QuizAbcdQuestion
            v-if="q.type === 'abcd'"
            :question="q"
            :selected="selectedIdx"
            :revealed="revealed"
            @select="pickAbcd"
          />
          <QuizTrueFalseQuestion
            v-else-if="q.type === 'tf'"
            :question="q"
            :selected="selectedBool"
            :revealed="revealed"
            @select="pickTf"
          />
          <QuizFlashcard v-else :question="q" @rate="rateFlash" />
        </div>

        <!-- feedback (abcd / tf) -->
        <Transition name="fb">
          <div v-if="revealed && q.type !== 'flash'" class="feedback" :class="isCorrect ? 'good' : 'bad'">
            <p class="fb-title">{{ isCorrect ? '✓ Dobrze!' : '✕ Niepoprawnie' }}</p>
            <p class="fb-explain">{{ explain }}</p>
            <NuxtLink :to="`/wiki/${item.topicId}`" class="fb-wiki">📖 Zobacz w wiki: {{ item.topicTitle }}</NuxtLink>
            <button class="btn btn-primary fb-next" @click="advance">
              {{ quiz.isLast ? 'Zobacz wyniki →' : 'Dalej →' }}
            </button>
          </div>
        </Transition>
      </GlassCard>

      <p class="kbd-hint dim">
        <template v-if="q.type === 'abcd'">Skróty: 1–4 / A–D · Enter = dalej</template>
        <template v-else-if="q.type === 'tf'">Skróty: P / F · Enter = dalej</template>
        <template v-else>Kliknij fiszkę, aby ją odwrócić</template>
      </p>
    </div>

    <div v-else class="empty glass">
      <p class="muted">Brak aktywnego quizu.</p>
      <NuxtLink to="/quiz" class="btn btn-primary">Ustaw quiz</NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.run-wrap { max-width: 720px; margin-inline: auto; display: flex; flex-direction: column; gap: var(--sp-3); }
.run-top { display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
.quit { color: var(--text-3); }
.run-card { margin-top: 0.4rem; }

.feedback { margin-top: var(--sp-4); padding: var(--sp-4); border-radius: var(--radius); border: 1px solid var(--glass-border); display: flex; flex-direction: column; gap: 0.6rem; }
.feedback.good { background: var(--ok-bg); border-color: rgba(52,211,153,0.4); }
.feedback.bad { background: var(--bad-bg); border-color: rgba(251,113,133,0.4); }
.fb-title { font-weight: 800; font-size: var(--fs-lg); }
.feedback.good .fb-title { color: var(--ok); }
.feedback.bad .fb-title { color: var(--bad); }
.fb-explain { color: var(--text-2); }
.fb-wiki { font-weight: 700; color: var(--accent); font-size: var(--fs-sm); }
.fb-wiki:hover { text-decoration: underline; }
.fb-next { align-self: flex-start; margin-top: 0.4rem; }

.kbd-hint { text-align: center; font-size: var(--fs-xs); margin-top: 0.4rem; }
.empty { text-align: center; max-width: 480px; margin: var(--sp-6) auto; display: flex; flex-direction: column; gap: 1rem; align-items: center; }

.q-anim { animation: qIn 0.4s var(--ease); }
@keyframes qIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
.fb-enter-active { transition: opacity 0.3s, transform 0.3s; }
.fb-enter-from { opacity: 0; transform: translateY(8px); }
@media (prefers-reduced-motion: reduce) { .q-anim { animation: none; } }
</style>
