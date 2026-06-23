<script setup lang="ts">
import { useSpecializationStore } from '~/stores/specialization'
import { useContent } from '~/composables/useContent'
import { useReveal } from '~/composables/useReveal'

const spec = useSpecializationStore()
const { topicsBySpec, categoriesForSpec, getSpecialization } = useContent()
const { reveal } = useReveal()
const route = useRoute()
const router = useRouter()

const search = ref('')
const activeCat = ref<string>((route.query.cat as string) || 'all')

const chosen = computed(() => (spec.current ? getSpecialization(spec.current) : null))
const cats = computed(() => (spec.current ? categoriesForSpec(spec.current) : []))
const allTopics = computed(() => (spec.current ? topicsBySpec(spec.current) : []))

const filtered = computed(() => {
  const q = search.value.trim().toLowerCase()
  return allTopics.value.filter((t) => {
    const catOk = activeCat.value === 'all' || t.category === activeCat.value
    const qOk =
      !q ||
      t.title.toLowerCase().includes(q) ||
      t.summary.toLowerCase().includes(q)
    return catOk && qOk
  })
})

function setCat(id: string) {
  activeCat.value = id
  router.replace({ query: id === 'all' ? {} : { cat: id } })
}

const listRef = ref<HTMLElement | null>(null)
watch(filtered, () => nextTick(() => reveal(listRef.value)))
onMounted(() => {
  // hydrate may set spec after mount; reveal once content is present
  nextTick(() => reveal(listRef.value))
})
watch(
  () => spec.current,
  () => nextTick(() => reveal(listRef.value))
)
</script>

<template>
  <section class="section container">
    <!-- no specialization chosen -->
    <ClientOnly>
      <GlassCard v-if="!chosen" strong class="empty">
        <h2>Najpierw wybierz specjalizację</h2>
        <p class="muted">Baza wiedzy dopasowuje się do wybranego zestawu zagadnień.</p>
        <NuxtLink to="/" class="btn btn-primary">Wybierz specjalizację</NuxtLink>
      </GlassCard>

      <template v-else>
        <header class="wiki-head">
          <div>
            <p class="eyebrow">Baza wiedzy · {{ chosen.short }}</p>
            <h1>Zagadnienia do nauki</h1>
          </div>
          <div class="wiki-search">
            <input
              v-model="search"
              type="search"
              placeholder="Szukaj zagadnienia…"
              aria-label="Szukaj zagadnienia"
            />
          </div>
        </header>

        <div class="filters" role="tablist" aria-label="Filtruj według kategorii">
          <button
            class="chip filter"
            :class="{ active: activeCat === 'all' }"
            @click="setCat('all')"
          >
            Wszystkie ({{ allTopics.length }})
          </button>
          <button
            v-for="c in cats"
            :key="c.id"
            class="chip filter"
            :class="{ active: activeCat === c.id }"
            @click="setCat(c.id)"
          >
            {{ c.icon }} {{ c.name }}
          </button>
        </div>

        <p v-if="!filtered.length" class="muted no-res">
          Brak zagadnień dla wybranych filtrów.
        </p>

        <div ref="listRef" class="grid grid-2 topic-grid">
          <div
            v-for="(t, i) in filtered"
            :key="t.id"
            class="reveal"
            :data-reveal-delay="0.03 * (i % 6)"
          >
            <TopicCard :topic="t" />
          </div>
        </div>
      </template>

      <template #fallback>
        <div class="empty glass"><p class="muted">Ładowanie bazy wiedzy…</p></div>
      </template>
    </ClientOnly>
  </section>
</template>

<style scoped>
.empty { text-align: center; max-width: 520px; margin: var(--sp-6) auto; display: flex; flex-direction: column; gap: 1rem; align-items: center; }
.wiki-head { display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 1rem; margin-bottom: var(--sp-4); }
.wiki-search { min-width: min(100%, 320px); }
.filters { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: var(--sp-4); }
.filter { cursor: pointer; transition: 0.25s; }
.filter:hover { color: var(--text-1); }
.filter.active { background: var(--accent-strong); border-color: transparent; color: #fff; }
.topic-grid { align-items: stretch; }
.no-res { text-align: center; padding: var(--sp-5) 0; }
</style>
