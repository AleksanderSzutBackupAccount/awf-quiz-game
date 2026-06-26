<script setup lang="ts">
import { useSpecializationStore } from '~/stores/specialization'
import { useLeaderboard } from '~/composables/useLeaderboard'
import type { LeaderRow } from '~/utils/leaderboard'
import { medalFor } from '~/utils/leaderboard'
import { rankNameForXp } from '~/stores/progress'
import type { SpecializationId } from '~/content/types'

const spec = useSpecializationStore()
const { fetchLeaderboard } = useLeaderboard()

const SPECS: { id: SpecializationId; label: string }[] = [
  { id: 'hotelarstwo', label: 'Hotelarstwo' },
  { id: 'przygodowa', label: 'Przygodowa' },
  { id: 'rekreacja', label: 'Rekreacja' },
]

const active = ref<SpecializationId>('hotelarstwo')
const rows = ref<LeaderRow[]>([])
const loading = ref(false)
const error = ref('')

// top 3 get the podium treatment; everyone else falls into the list below
const podium = computed(() => rows.value.slice(0, 3))
const rest = computed(() => rows.value.slice(3))

async function load() {
  loading.value = true
  error.value = ''
  try {
    rows.value = await fetchLeaderboard(active.value)
  } catch (e: any) {
    error.value = e?.message || 'Nie udało się wczytać rankingu.'
    rows.value = []
  } finally {
    loading.value = false
  }
}

watch(active, load)
onMounted(() => {
  spec.hydrate()
  const target = spec.current ?? active.value
  if (target !== active.value) {
    active.value = target // value changes → watch(active, load) fires load() once
  } else {
    load() // value unchanged → watcher won't fire, so load manually
  }
})
</script>

<template>
  <section class="section container">
    <ClientOnly>
      <header class="rk-head">
        <div>
          <p class="eyebrow">Ranking</p>
          <h1>Tabela wyników</h1>
        </div>
        <div class="rk-tabs">
          <button
            v-for="s in SPECS"
            :key="s.id"
            class="chip filter"
            :class="{ active: active === s.id }"
            @click="active = s.id"
          >
            {{ s.label }}
          </button>
        </div>
      </header>

      <p v-if="loading" class="muted">Ładowanie…</p>
      <p v-else-if="error" class="muted">{{ error }}</p>
      <p v-else-if="!rows.length" class="muted">
        Brak graczy z nazwą w tej specjalizacji. Ustaw swoją nazwę i zacznij zdobywać XP!
      </p>

      <template v-else>
        <!-- podium: top 3 -->
        <ol class="podium">
          <li
            v-for="(r, i) in podium"
            :key="i"
            class="pod"
            :class="[`p${i + 1}`, { me: r.is_me }]"
          >
            <span class="pod-medal" aria-hidden="true">{{ medalFor(i) }}</span>
            <span class="pod-name">{{ r.display_name }}<span v-if="r.is_me" class="rk-you"> (Ty)</span></span>
            <span class="pod-rank dim">{{ rankNameForXp(r.xp) }}</span>
            <span class="pod-xp">{{ r.xp }} XP</span>
          </li>
        </ol>

        <!-- everyone from 4th place down -->
        <GlassCard v-if="rest.length" strong class="rk-card">
          <ol class="rk-list" start="4">
            <li
              v-for="(r, i) in rest"
              :key="i"
              class="rk-row"
              :class="{ me: r.is_me }"
            >
              <span class="rk-pos">{{ i + 4 }}</span>
              <span class="rk-name">{{ r.display_name }}<span v-if="r.is_me" class="rk-you"> (Ty)</span></span>
              <span class="rk-rank dim">{{ rankNameForXp(r.xp) }}</span>
              <span class="rk-xp">{{ r.xp }} XP</span>
            </li>
          </ol>
        </GlassCard>
      </template>

      <template #fallback>
        <div class="empty glass"><p class="muted">Ładowanie rankingu…</p></div>
      </template>
    </ClientOnly>
  </section>
</template>

<style scoped>
.rk-head { display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 1rem; margin-bottom: var(--sp-4); }
.rk-tabs { display: flex; gap: 0.5rem; }
.filter { cursor: pointer; transition: 0.2s; }
.filter.active { background: var(--accent-strong); border-color: transparent; color: #fff; }
/* podium — top 3 */
.podium {
  list-style: none; display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.8rem;
  align-items: end; margin-bottom: var(--sp-4);
}
.pod {
  display: flex; flex-direction: column; align-items: center; gap: 0.25rem; text-align: center;
  padding: 1.1rem 0.8rem; border-radius: var(--radius);
  background: var(--glass-bg); border: 1px solid var(--glass-border);
}
.pod.p1 {
  order: 2; padding-block: 1.6rem;
  border-color: rgba(255,214,102,0.55); background: rgba(255,214,102,0.1);
  box-shadow: 0 12px 30px -16px rgba(255,214,102,0.6);
}
.pod.p2 { order: 1; border-color: rgba(203,213,225,0.5); background: rgba(203,213,225,0.08); }
.pod.p3 { order: 3; border-color: rgba(214,158,110,0.5); background: rgba(214,158,110,0.08); }
.pod.me { outline: 2px solid var(--accent); outline-offset: 2px; }
.pod-medal { font-size: 2rem; line-height: 1; }
.pod.p1 .pod-medal { font-size: 2.6rem; }
.pod-name { font-weight: 800; word-break: break-word; }
.pod-rank { font-size: var(--fs-xs); }
.pod-xp { font-weight: 800; color: var(--aurora-2); margin-top: 0.1rem; }

.rk-list { list-style: none; display: flex; flex-direction: column; gap: 0.3rem; }
.rk-row {
  display: grid; grid-template-columns: 2.2rem 1fr auto auto; align-items: center; gap: 0.8rem;
  padding: 0.7rem 0.9rem; border-radius: var(--radius); border: 1px solid transparent;
}
.rk-row:nth-child(odd) { background: var(--glass-bg); }
.rk-row.me { border-color: var(--accent); background: rgba(124,139,255,0.1); }
.rk-pos { font-weight: 800; color: var(--text-3); text-align: center; }
.rk-name { font-weight: 700; }
.rk-you { color: var(--accent); font-weight: 600; }
.rk-rank { font-size: var(--fs-sm); }
.rk-xp { font-weight: 800; color: var(--aurora-2); }
.empty { text-align: center; max-width: 480px; margin: var(--sp-6) auto; padding: var(--sp-5); }

@media (max-width: 560px) {
  .podium { grid-template-columns: 1fr; align-items: stretch; }
  .pod, .pod.p1, .pod.p2, .pod.p3 { order: 0; flex-direction: row; justify-content: space-between; text-align: left; padding-block: 0.9rem; }
  .pod.p1 .pod-medal { font-size: 2rem; }
  .pod-name { flex: 1; margin-inline: 0.6rem; }
}
</style>
