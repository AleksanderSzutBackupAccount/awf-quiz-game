<script setup lang="ts">
import { useQuizStore } from '~/stores/quiz'
import { useProgressStore } from '~/stores/progress'
import { useReveal } from '~/composables/useReveal'
import { useLevels, type Level } from '~/composables/useLevels'
import { useCelebration } from '~/composables/useCelebration'
import { XP_PER_CORRECT } from '~/stores/progress'
import { useProfileStore } from '~/stores/profile'
import { useLeaderboard } from '~/composables/useLeaderboard'
import { computeOvertaken } from '~/utils/leaderboard'

const quiz = useQuizStore()
const progress = useProgressStore()
const router = useRouter()
const { reveal } = useReveal()
const { confetti } = useCelebration()
const profile = useProfileStore()
const { fetchLeaderboard } = useLeaderboard()
const overtaken = ref<string[]>([])
const showOvertake = ref(false)

const specRef = computed(() => quiz.specialization)
const { levels } = useLevels(specRef)

// Flashcards don't award XP (self-graded), so never show an XP gain for them.
const xpEarned = computed(() => (isFlash.value ? 0 : quiz.score * XP_PER_CORRECT))

// queue of freshly-completed (not yet celebrated) levels to show as level-up modals
const levelUpQueue = ref<Level[]>([])
const currentLevelUp = computed(() => levelUpQueue.value[0] ?? null)

function dismissLevelUp() {
  const done = levelUpQueue.value.shift()
  if (done) progress.markLevelCelebrated(done.id)
}

onMounted(() => {
  if (!quiz.hasSession) {
    router.replace('/quiz')
    return
  }
  nextTick(() => reveal(document.querySelector('.results') as HTMLElement))

  // detect newly completed levels (mastered now, not previously celebrated)
  const fresh = levels.value.filter(
    (l) => l.state === 'completed' && !progress.isLevelCelebrated(l.id)
  )
  if (fresh.length) {
    levelUpQueue.value = fresh
  } else if (pct.value >= 80 && !isFlash.value) {
    // celebrate a strong result even without a level-up
    confetti({ count: 110 })
  }
  void detectOvertaken()
})

async function detectOvertaken() {
  const spec = quiz.specialization
  if (isFlash.value || !profile.displayName || !spec) return
  const xpAfter = progress.xpForSpec(spec)
  const xpBefore = xpAfter - quiz.score * XP_PER_CORRECT
  try {
    const rows = await fetchLeaderboard(spec)
    const names = computeOvertaken(rows, xpBefore, xpAfter)
    if (names.length) {
      overtaken.value = names
      showOvertake.value = true
    }
  } catch {
    /* silent — ranking errors must not break the results screen */
  }
}

const pct = computed(() =>
  quiz.total ? Math.round((quiz.score / quiz.total) * 100) : 0
)
const isFlash = computed(() => quiz.mode === 'flash')

const grade = computed(() => {
  if (isFlash.value) return { title: 'Powtórka zakończona', emoji: '🃏', tone: 'neutral' }
  if (pct.value >= 80) return { title: 'Świetnie!', emoji: '🏆', tone: 'good' }
  if (pct.value >= 50) return { title: 'Nieźle — pucujemy dalej', emoji: '💪', tone: 'mid' }
  return { title: 'Czas na powtórkę', emoji: '📚', tone: 'bad' }
})

// wrong items first, then correct
const ordered = computed(() =>
  quiz.items
    .map((it, i) => ({ it, ans: quiz.answers[i]!, i }))
    .sort((a, b) => Number(a.ans.correct) - Number(b.ans.correct))
)
const wrongCount = computed(() => quiz.items.length - quiz.score)

function repeatWrong() {
  const wrong = quiz.wrongItems.map((w) => w.it)
  if (!wrong.length || !quiz.specialization) return
  quiz.start({
    mode: quiz.mode,
    scopeLabel: `Powtórka błędów · ${quiz.scopeLabel}`,
    specialization: quiz.specialization,
    items: wrong,
  })
  router.push('/quiz/run')
}
function newQuiz() {
  quiz.clear()
  router.push('/quiz')
}

const ringStyle = computed(() => ({
  background: `conic-gradient(var(--accent) ${pct.value * 3.6}deg, rgba(255,255,255,0.08) 0deg)`,
}))
</script>

<template>
  <section class="section container results">
    <div v-if="quiz.hasSession">
      <GlassCard strong class="summary reveal" :class="grade.tone">
        <div class="ring" :style="ringStyle" aria-hidden="true">
          <div class="ring-inner">
            <span class="ring-num">{{ isFlash ? quiz.score : pct + '%' }}</span>
            <span class="ring-sub dim">{{ isFlash ? 'umiem' : 'poprawnych' }}</span>
          </div>
        </div>
        <div class="summary-text">
          <p class="grade-emoji" aria-hidden="true">{{ grade.emoji }}</p>
          <h1>{{ grade.title }}</h1>
          <p class="muted">
            {{ isFlash
              ? `Oznaczono ${quiz.score} z ${quiz.total} fiszek jako „umiem”.`
              : `Poprawne odpowiedzi: ${quiz.score} / ${quiz.total}. Do powtórki: ${wrongCount}.` }}
          </p>
          <p v-if="xpEarned > 0" class="xp-earned">
            <span aria-hidden="true">✨</span> Zdobyto <strong><CountUp :to="xpEarned" /> XP</strong>
          </p>
          <p v-else-if="isFlash" class="flash-note dim">
            <span aria-hidden="true">ℹ️</span> Fiszki są samodzielnie oceniane, więc nie wpływają na XP ani ranking.
          </p>
          <div class="summary-actions">
            <button v-if="wrongCount > 0" class="btn btn-primary" @click="repeatWrong">
              ↺ Powtórz {{ isFlash ? 'oznaczone' : 'błędne' }} ({{ wrongCount }})
            </button>
            <button class="btn" @click="newQuiz">🎯 Nowy quiz</button>
            <NuxtLink to="/wiki" class="btn btn-ghost">📖 Baza wiedzy</NuxtLink>
          </div>
        </div>
      </GlassCard>

      <div v-if="quiz.specialization" class="reveal rank-standing">
        <RankStanding :spec="quiz.specialization" />
      </div>

      <h2 class="review-title reveal">
        Przegląd odpowiedzi
        <span class="dim">— kliknij „Przejdź do wiki”, aby douczyć temat</span>
      </h2>

      <div class="review-list">
        <div
          v-for="(row, n) in ordered"
          :key="row.i"
          class="reveal"
          :data-reveal-delay="0.03 * (n % 6)"
        >
          <QuizResultItem :item="row.it" :answer="row.ans" />
        </div>
      </div>
    </div>

    <div v-else class="empty glass">
      <p class="muted">Brak wyników do pokazania.</p>
      <NuxtLink to="/quiz" class="btn btn-primary">Rozpocznij quiz</NuxtLink>
    </div>

    <LevelUpModal
      v-if="currentLevelUp"
      :level-title="currentLevelUp.title"
      :level-number="currentLevelUp.number"
      @close="dismissLevelUp"
    />
    <OvertakeModal
      v-if="showOvertake && !currentLevelUp"
      :names="overtaken"
      @close="showOvertake = false"
    />
  </section>
</template>

<style scoped>
.summary { display: flex; flex-wrap: wrap; align-items: center; gap: var(--sp-5); margin-bottom: var(--sp-5); }
.ring {
  flex: none; width: 150px; height: 150px; border-radius: 50%;
  display: grid; place-items: center;
}
.ring-inner {
  width: 116px; height: 116px; border-radius: 50%;
  background: var(--bg-1); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.1rem;
  border: 1px solid var(--glass-border);
}
.ring-num { font-size: var(--fs-xl); font-weight: 800; }
.ring-sub { font-size: var(--fs-xs); }
.summary-text { flex: 1; min-width: 260px; }
.grade-emoji { font-size: 2.4rem; line-height: 1; }
.summary-text h1 { font-size: var(--fs-xl); margin: 0.3rem 0; }
.xp-earned { margin-top: 0.4rem; font-size: var(--fs-base); color: var(--aurora-2); }
.xp-earned strong { color: var(--text-1); }
.flash-note { margin-top: 0.4rem; font-size: var(--fs-sm); }
.summary-actions { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-top: var(--sp-3); }

.review-title { font-size: var(--fs-lg); margin-bottom: var(--sp-3); }
.review-title .dim { font-size: var(--fs-sm); font-weight: 400; }
.review-list { display: flex; flex-direction: column; gap: var(--sp-3); }
.rank-standing { margin-bottom: var(--sp-5); }

.empty { text-align: center; max-width: 480px; margin: var(--sp-6) auto; display: flex; flex-direction: column; gap: 1rem; align-items: center; }
</style>
