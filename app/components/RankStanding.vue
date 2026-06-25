<script setup lang="ts">
import { useLeaderboard } from '~/composables/useLeaderboard'
import type { LeaderRow } from '~/utils/leaderboard'
import { medalFor } from '~/utils/leaderboard'
import { rankNameForXp } from '~/stores/progress'
import type { SpecializationId } from '~/content/types'

const props = defineProps<{ spec: SpecializationId }>()
const { fetchLeaderboard } = useLeaderboard()

const rows = ref<LeaderRow[]>([])
const loading = ref(true)
const failed = ref(false)

async function load() {
  loading.value = true
  failed.value = false
  try {
    rows.value = await fetchLeaderboard(props.spec)
  } catch {
    failed.value = true // ranking errors must never break the host page
    rows.value = []
  } finally {
    loading.value = false
  }
}
onMounted(load)
watch(() => props.spec, load)

const myIndex = computed(() => rows.value.findIndex((r) => r.is_me))
const myRow = computed(() => (myIndex.value >= 0 ? rows.value[myIndex.value] : null))
const top3 = computed(() => rows.value.slice(0, 3))
const inTop3 = computed(() => myIndex.value >= 0 && myIndex.value < 3)
</script>

<template>
  <ClientOnly>
    <GlassCard strong class="rs-card">
      <div class="rs-head">
        <h3 class="rs-title"><span aria-hidden="true">🏆</span> Twoje miejsce w rankingu</h3>
        <NuxtLink to="/ranking" class="rs-all">Pełny ranking →</NuxtLink>
      </div>

      <p v-if="loading" class="muted rs-msg">Ładowanie rankingu…</p>
      <p v-else-if="failed" class="muted rs-msg">Nie udało się wczytać rankingu.</p>

      <template v-else>
        <!-- not on the board yet: needs a display name -->
        <div v-if="!myRow" class="rs-join">
          <p class="muted">Nie jesteś jeszcze w rankingu tej specjalizacji.</p>
          <NuxtLink to="/ranking" class="btn btn-primary">Dołącz do rankingu</NuxtLink>
        </div>

        <template v-else>
          <!-- your standing, front and centre -->
          <div class="rs-me">
            <span class="rs-place">{{ medalFor(myIndex) || `#${myIndex + 1}` }}</span>
            <div class="rs-me-text">
              <strong>{{ myIndex + 1 }}. miejsce</strong>
              <span class="dim">z {{ rows.length }} • {{ rankNameForXp(myRow.xp) }}</span>
            </div>
            <span class="rs-me-xp">{{ myRow.xp }} XP</span>
          </div>

          <!-- podium: top 3 -->
          <ol class="rs-podium">
            <li
              v-for="(r, i) in top3"
              :key="i"
              class="rs-row"
              :class="{ me: r.is_me }"
            >
              <span class="rs-medal" aria-hidden="true">{{ medalFor(i) }}</span>
              <span class="rs-name">{{ r.display_name }}<span v-if="r.is_me" class="rs-you"> (Ty)</span></span>
              <span class="rs-xp">{{ r.xp }} XP</span>
            </li>
          </ol>

          <p v-if="!inTop3" class="rs-hint dim">Wciąż brakuje Ci kilku XP do podium — graj dalej!</p>
        </template>
      </template>

      <template #fallback>
        <p class="muted rs-msg">Ładowanie rankingu…</p>
      </template>
    </GlassCard>
  </ClientOnly>
</template>

<style scoped>
.rs-card { display: flex; flex-direction: column; gap: var(--sp-3); }
.rs-head { display: flex; align-items: baseline; justify-content: space-between; gap: 1rem; }
.rs-title { font-size: var(--fs-lg); }
.rs-all { font-size: var(--fs-sm); font-weight: 700; color: var(--accent); white-space: nowrap; }
.rs-all:hover { text-decoration: underline; }
.rs-msg { padding: 0.4rem 0; }
.rs-join { display: flex; flex-direction: column; gap: 0.8rem; align-items: flex-start; }

.rs-me {
  display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 0.9rem;
  padding: 0.8rem 1rem; border-radius: var(--radius);
  border: 1px solid var(--accent); background: rgba(124,139,255,0.12);
}
.rs-place { font-size: 1.7rem; font-weight: 800; line-height: 1; min-width: 2ch; text-align: center; }
.rs-me-text { display: flex; flex-direction: column; line-height: 1.2; }
.rs-me-text strong { font-size: var(--fs-base); }
.rs-me-text .dim { font-size: var(--fs-sm); }
.rs-me-xp { font-weight: 800; color: var(--aurora-2); }

.rs-podium { list-style: none; display: flex; flex-direction: column; gap: 0.3rem; }
.rs-row {
  display: grid; grid-template-columns: 2rem 1fr auto; align-items: center; gap: 0.7rem;
  padding: 0.55rem 0.8rem; border-radius: var(--radius); border: 1px solid transparent;
}
.rs-row:nth-child(odd) { background: var(--glass-bg); }
.rs-row.me { border-color: var(--accent); background: rgba(124,139,255,0.1); }
.rs-medal { font-size: 1.3rem; text-align: center; }
.rs-name { font-weight: 700; }
.rs-you { color: var(--accent); font-weight: 600; }
.rs-xp { font-weight: 800; color: var(--aurora-2); font-size: var(--fs-sm); }
.rs-hint { font-size: var(--fs-xs); }
</style>
