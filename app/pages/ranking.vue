<script setup lang="ts">
import { useSpecializationStore } from '~/stores/specialization'
import { useLeaderboard } from '~/composables/useLeaderboard'
import type { LeaderRow } from '~/utils/leaderboard'
import { RANKS, XP_PER_LEVEL } from '~/stores/progress'
import type { SpecializationId } from '~/content/types'

const spec = useSpecializationStore()
const { fetchLeaderboard } = useLeaderboard()

const SPECS: { id: SpecializationId; label: string }[] = [
  { id: 'hotelarstwo', label: 'Hotelarstwo' },
  { id: 'przygodowa', label: 'Przygodowa' },
]

const active = ref<SpecializationId>('hotelarstwo')
const rows = ref<LeaderRow[]>([])
const loading = ref(false)
const error = ref('')

function rankName(xp: number) {
  return RANKS[Math.min(RANKS.length - 1, Math.floor(xp / XP_PER_LEVEL))] ?? RANKS[0]
}

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
  if (spec.current) {
    active.value = spec.current // watcher fires load() automatically
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

      <GlassCard v-else strong class="rk-card">
        <ol class="rk-list">
          <li
            v-for="(r, i) in rows"
            :key="i"
            class="rk-row"
            :class="{ me: r.is_me }"
          >
            <span class="rk-pos">{{ i + 1 }}</span>
            <span class="rk-name">{{ r.display_name }}<span v-if="r.is_me" class="rk-you"> (Ty)</span></span>
            <span class="rk-rank dim">{{ rankName(r.xp) }}</span>
            <span class="rk-xp">{{ r.xp }} XP</span>
          </li>
        </ol>
      </GlassCard>

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
</style>
