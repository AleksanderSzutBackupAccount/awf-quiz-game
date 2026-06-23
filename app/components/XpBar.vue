<script setup lang="ts">
import { useProgressStore } from '~/stores/progress'

const progress = useProgressStore()

const pct = computed(() =>
  Math.round((progress.xpIntoRank / progress.xpForNextRank) * 100)
)
</script>

<template>
  <div class="xpbar glass">
    <div class="rank-badge" aria-hidden="true">★</div>
    <div class="xp-main">
      <div class="xp-head">
        <span class="rank-name">{{ progress.rankName }}</span>
        <span class="xp-total"><CountUp :to="progress.xp" /> XP</span>
      </div>
      <div class="xp-track" role="progressbar" :aria-valuenow="pct" aria-valuemin="0" aria-valuemax="100">
        <div class="xp-fill" :style="{ width: pct + '%' }" />
      </div>
      <p class="xp-sub dim">{{ progress.xpIntoRank }} / {{ progress.xpForNextRank }} XP do kolejnej rangi</p>
    </div>
  </div>
</template>

<style scoped>
.xpbar { display: flex; align-items: center; gap: 1rem; padding: 1rem 1.2rem; }
.rank-badge {
  flex: none; width: 48px; height: 48px; border-radius: 14px; display: grid; place-items: center;
  font-size: 1.5rem; color: #fff;
  background: linear-gradient(135deg, var(--aurora-1), var(--aurora-2));
  box-shadow: 0 8px 22px -8px var(--accent-strong);
}
.xp-main { flex: 1; }
.xp-head { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; }
.rank-name { font-weight: 800; font-size: var(--fs-base); }
.xp-total { font-weight: 700; color: var(--aurora-2); }
.xp-track { height: 10px; border-radius: 999px; background: rgba(255,255,255,0.08); border: 1px solid var(--glass-border); overflow: hidden; margin: 0.4rem 0 0.3rem; }
.xp-fill { height: 100%; border-radius: 999px; background: linear-gradient(90deg, var(--aurora-1), var(--aurora-2), var(--aurora-3)); transition: width 0.9s var(--ease); }
.xp-sub { font-size: var(--fs-xs); }
</style>
