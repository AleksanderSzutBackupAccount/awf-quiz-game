<script setup lang="ts">
import { useContent } from '~/composables/useContent'
import { useReveal } from '~/composables/useReveal'

const route = useRoute()
const { topicById, topicsBySpec, getCategory, countQuestions } = useContent()
const { reveal } = useReveal()

const id = computed(() => route.params.id as string)
const topic = computed(() => topicById(id.value))

// 404 if topic id is invalid
if (!topic.value) {
  throw createError({ statusCode: 404, statusMessage: 'Nie znaleziono zagadnienia', fatal: true })
}

const cat = computed(() => (topic.value ? getCategory(topic.value.category) : undefined))

const siblings = computed(() =>
  topic.value ? topicsBySpec(topic.value.specialization) : []
)
const idx = computed(() => siblings.value.findIndex((t) => t.id === id.value))
const prev = computed(() => (idx.value > 0 ? siblings.value[idx.value - 1] : null))
const next = computed(() =>
  idx.value >= 0 && idx.value < siblings.value.length - 1 ? siblings.value[idx.value + 1] : null
)

// Table of contents from headings
function slug(s: string) {
  return s
    .toLowerCase()
    .replace(/[ąćęłńóśźż]/g, (c) => ({ ą: 'a', ć: 'c', ę: 'e', ł: 'l', ń: 'n', ó: 'o', ś: 's', ź: 'z', ż: 'z' }[c] || c))
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}
const toc = computed(() =>
  (topic.value?.wiki ?? [])
    .filter((b) => b.heading)
    .map((b) => ({ label: b.heading as string, id: slug(b.heading as string) }))
)

useHead(() => ({
  title: topic.value ? `${topic.value.title} — AWF Licencjat` : 'Zagadnienie',
}))

const rootRef = ref<HTMLElement | null>(null)
onMounted(() => nextTick(() => reveal(rootRef.value)))
watch(id, () => nextTick(() => reveal(rootRef.value)))
</script>

<template>
  <section v-if="topic" ref="rootRef" class="section container">
    <NuxtLink to="/wiki" class="back reveal">← Wróć do bazy wiedzy</NuxtLink>

    <header class="art-head reveal">
      <span class="chip">{{ cat?.icon }} {{ cat?.name }}</span>
      <h1>{{ topic.title }}</h1>
      <p class="muted">{{ topic.summary }}</p>
    </header>

    <div class="art-layout">
      <aside class="toc reveal" aria-label="Spis treści">
        <GlassCard strong class="toc-card">
          <p class="toc-title">Spis treści</p>
          <nav>
            <a v-for="t in toc" :key="t.id" :href="`#${t.id}`" class="toc-link">{{ t.label }}</a>
          </nav>
          <NuxtLink :to="`/quiz?topic=${topic.id}`" class="btn btn-primary btn-block quiz-cta">
            🎯 Sprawdź się z tego zagadnienia
          </NuxtLink>
          <p class="dim quiz-note">{{ countQuestions(topic) }} pytań + fiszki</p>
        </GlassCard>
      </aside>

      <div class="art-body reveal" :data-reveal-delay="0.06">
        <GlassCard class="art-content">
          <WikiArticle :blocks="topic.wiki" />
        </GlassCard>

        <!-- mobile quiz CTA -->
        <NuxtLink :to="`/quiz?topic=${topic.id}`" class="btn btn-primary btn-block mobile-cta">
          🎯 Sprawdź się z tego zagadnienia
        </NuxtLink>

        <nav class="prevnext" aria-label="Nawigacja między zagadnieniami">
          <NuxtLink v-if="prev" :to="`/wiki/${prev.id}`" class="pn">
            <span class="dim">← Poprzednie</span>
            <span class="pn-title">{{ prev.title }}</span>
          </NuxtLink>
          <span v-else />
          <NuxtLink v-if="next" :to="`/wiki/${next.id}`" class="pn pn-right">
            <span class="dim">Następne →</span>
            <span class="pn-title">{{ next.title }}</span>
          </NuxtLink>
        </nav>
      </div>
    </div>
  </section>
</template>

<style scoped>
.back { display: inline-block; margin-bottom: var(--sp-3); color: var(--text-2); font-weight: 600; }
.back:hover { color: var(--text-1); }
.art-head { margin-bottom: var(--sp-4); display: flex; flex-direction: column; gap: 0.7rem; max-width: 760px; }
.art-head h1 { font-size: var(--fs-2xl); }

.art-layout { display: grid; grid-template-columns: 260px 1fr; gap: var(--sp-4); align-items: start; }
.toc { position: sticky; top: calc(var(--header-h) + 1rem); }
.toc-card { display: flex; flex-direction: column; gap: 0.3rem; }
.toc-title { font-weight: 700; margin-bottom: 0.4rem; }
.toc-link { display: block; padding: 0.4rem 0.6rem; border-radius: 10px; color: var(--text-2); font-size: var(--fs-sm); transition: 0.2s; }
.toc-link:hover { color: var(--text-1); background: var(--glass-bg); }
.quiz-cta { margin-top: 0.9rem; }
.quiz-note { text-align: center; font-size: var(--fs-xs); margin-top: 0.4rem; }

.art-content { line-height: 1.7; }
.mobile-cta { display: none; margin-top: var(--sp-4); }

.prevnext { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: var(--sp-4); }
.pn { display: flex; flex-direction: column; gap: 0.2rem; padding: 1rem; border-radius: var(--radius); background: var(--glass-bg); border: 1px solid var(--glass-border); transition: 0.25s; }
.pn:hover { border-color: var(--glass-border-strong); transform: translateY(-2px); }
.pn-right { text-align: right; }
.pn-title { font-weight: 600; }

@media (max-width: 860px) {
  .art-layout { grid-template-columns: 1fr; }
  .toc { display: none; }
  .mobile-cta { display: flex; }
  .prevnext { grid-template-columns: 1fr; }
  .pn-right { text-align: left; }
}
</style>
