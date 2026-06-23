<script setup lang="ts">
import { useSpecializationStore } from '~/stores/specialization'
import { useContent } from '~/composables/useContent'
import { useQuizStore, type QuizMode, type SessionItem } from '~/stores/quiz'
import { useReveal } from '~/composables/useReveal'

const spec = useSpecializationStore()
const quiz = useQuizStore()
const { topicsBySpec, categoriesForSpec, topicById, getSpecialization } = useContent()
const { reveal } = useReveal()
const route = useRoute()
const router = useRouter()

const chosen = computed(() => (spec.current ? getSpecialization(spec.current) : null))
const cats = computed(() => (spec.current ? categoriesForSpec(spec.current) : []))

const modes: { id: QuizMode; icon: string; name: string; desc: string }[] = [
  { id: 'abcd', icon: '🔤', name: 'Wielokrotny wybór', desc: 'Pytania ABCD z natychmiastową informacją zwrotną.' },
  { id: 'tf', icon: '⚖️', name: 'Prawda / Fałsz', desc: 'Szybka ocena stwierdzeń — utrwalaj definicje i fakty.' },
  { id: 'flash', icon: '🃏', name: 'Fiszki', desc: 'Powtórki: pytanie z przodu, modelowa odpowiedź z tyłu.' },
]

const mode = ref<QuizMode>('abcd')
const scope = ref<string>('all') // 'all' | 'cat:<id>' | 'topic:<id>'
const count = ref<number>(10)

// preselect single-topic scope from query (?topic=)
const presetTopic = computed(() =>
  route.query.topic ? topicById(route.query.topic as string) : null
)
onMounted(() => {
  const pt = presetTopic.value
  if (pt && (pt.track === 'wszyscy' || pt.track === spec.current)) {
    scope.value = `topic:${pt.id}`
  } else if (route.query.cat) {
    // preselect a category scope (e.g. from "Ćwicz ten poziom")
    scope.value = `cat:${route.query.cat as string}`
  }
  nextTick(() => reveal(document.querySelector('.quiz-setup') as HTMLElement))
})

// topics within the selected scope
const scopeTopics = computed(() => {
  const all = spec.current ? topicsBySpec(spec.current) : []
  if (scope.value.startsWith('cat:')) {
    const id = scope.value.slice(4)
    return all.filter((t) => t.category === id)
  }
  if (scope.value.startsWith('topic:')) {
    const id = scope.value.slice(6)
    return all.filter((t) => t.id === id)
  }
  return all
})

// available question pool for chosen mode
const pool = computed<SessionItem[]>(() =>
  scopeTopics.value.flatMap((t) =>
    t.questions
      .filter((q) => q.type === mode.value)
      .map((q) => ({ topicId: t.id, topicTitle: t.title, question: q }))
  )
)

const countOptions = computed(() => {
  const n = pool.value.length
  return [5, 10, 20].filter((c) => c < n).concat(n)
})

const scopeLabel = computed(() => {
  if (scope.value.startsWith('cat:')) {
    const c = cats.value.find((x) => x.id === scope.value.slice(4))
    return c ? c.name : 'Kategoria'
  }
  if (scope.value.startsWith('topic:')) {
    const t = topicById(scope.value.slice(6))
    return t ? t.title : 'Zagadnienie'
  }
  return 'Cała baza'
})

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j]!, a[i]!]
  }
  return a
}

const canStart = computed(() => pool.value.length > 0 && !!spec.current)

function start() {
  if (!canStart.value || !spec.current) return
  const limit = mode.value === 'flash' ? pool.value.length : count.value
  const items = shuffle(pool.value).slice(0, Math.min(limit, pool.value.length))
  quiz.start({
    mode: mode.value,
    scopeLabel: scopeLabel.value,
    specialization: spec.current,
    items,
  })
  router.push('/quiz/run')
}
</script>

<template>
  <section class="section container">
    <ClientOnly>
      <GlassCard v-if="!chosen" strong class="empty">
        <h2>Najpierw wybierz specjalizację</h2>
        <p class="muted">Quiz korzysta z zagadnień wybranej specjalizacji.</p>
        <NuxtLink to="/" class="btn btn-primary">Wybierz specjalizację</NuxtLink>
      </GlassCard>

      <div v-else class="quiz-setup">
        <header class="setup-head">
          <p class="eyebrow">Quiz · {{ chosen.short }}</p>
          <h1>Ustaw swój trening wiedzy</h1>
          <p class="muted">Wybierz tryb, zakres i liczbę pytań — start na dole.</p>
        </header>

        <!-- MODE (wybór na początku) -->
        <h2 class="step-title">1 · Tryb</h2>
        <div class="grid grid-3 modes">
          <GlassCard
            v-for="m in modes"
            :key="m.id"
            as="button"
            interactive
            :strong="mode === m.id"
            class="mode-card"
            :class="{ active: mode === m.id }"
            :aria-pressed="mode === m.id"
            @click="mode = m.id"
          >
            <span class="mode-icon" aria-hidden="true">{{ m.icon }}</span>
            <span class="mode-name">{{ m.name }}</span>
            <span class="mode-desc dim">{{ m.desc }}</span>
          </GlassCard>
        </div>

        <!-- SCOPE -->
        <h2 class="step-title">2 · Zakres</h2>
        <div class="scopes">
          <button class="chip filter" :class="{ active: scope === 'all' }" @click="scope = 'all'">
            Cała baza
          </button>
          <button
            v-for="c in cats"
            :key="c.id"
            class="chip filter"
            :class="{ active: scope === `cat:${c.id}` }"
            @click="scope = `cat:${c.id}`"
          >
            {{ c.icon }} {{ c.name }}
          </button>
          <span v-if="presetTopic" class="chip filter active topic-chip">
            🎯 {{ presetTopic.title }}
          </span>
        </div>

        <!-- COUNT -->
        <template v-if="mode !== 'flash'">
          <h2 class="step-title">3 · Liczba pytań</h2>
          <div class="scopes">
            <button
              v-for="c in countOptions"
              :key="c"
              class="chip filter"
              :class="{ active: count === c }"
              @click="count = c"
            >
              {{ c === pool.length ? `Wszystkie (${c})` : c }}
            </button>
          </div>
        </template>

        <!-- START -->
        <GlassCard strong class="start-card">
          <div class="start-info">
            <p class="dim">Wybrano</p>
            <p class="start-summary">
              <strong>{{ modes.find((m) => m.id === mode)?.name }}</strong>
              · {{ scopeLabel }} ·
              {{ mode === 'flash' ? `${pool.length} fiszek` : `${Math.min(count, pool.length)} pytań` }}
            </p>
          </div>
          <button class="btn btn-primary btn-lg" :disabled="!canStart" @click="start">
            Rozpocznij →
          </button>
        </GlassCard>
        <p v-if="!pool.length" class="muted no-pool">
          Brak pytań tego typu w wybranym zakresie — zmień tryb lub zakres.
        </p>
      </div>

      <template #fallback>
        <div class="empty glass"><p class="muted">Ładowanie…</p></div>
      </template>
    </ClientOnly>
  </section>
</template>

<style scoped>
.empty { text-align: center; max-width: 520px; margin: var(--sp-6) auto; display: flex; flex-direction: column; gap: 1rem; align-items: center; }
.setup-head { margin-bottom: var(--sp-5); display: flex; flex-direction: column; gap: 0.5rem; }
.setup-head h1 { font-size: var(--fs-2xl); }
.step-title { font-size: var(--fs-lg); margin: var(--sp-4) 0 var(--sp-3); }

.modes { align-items: stretch; }
.mode-card { display: flex; flex-direction: column; gap: 0.5rem; text-align: left; color: inherit; font: inherit; }
.mode-card.active { box-shadow: 0 0 0 2px var(--accent), var(--glass-shadow); }
.mode-icon { font-size: 2rem; }
.mode-name { font-weight: 700; font-size: var(--fs-lg); }
.mode-desc { font-size: var(--fs-sm); }

.scopes { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.filter { cursor: pointer; transition: 0.2s; }
.filter:hover { color: var(--text-1); }
.filter.active { background: var(--accent-strong); border-color: transparent; color: #fff; }
.topic-chip { cursor: default; }

.start-card {
  margin-top: var(--sp-5);
  display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem;
}
.start-summary { font-size: var(--fs-base); }
.start-card .btn { min-width: 200px; }
.no-pool { margin-top: 1rem; text-align: center; }
</style>
