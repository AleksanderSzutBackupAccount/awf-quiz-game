<script setup lang="ts">
const props = withDefaults(
  defineProps<{ value: number; max?: number; label?: string }>(),
  { max: 100 }
)
const pct = computed(() =>
  props.max > 0 ? Math.min(100, Math.round((props.value / props.max) * 100)) : 0
)
</script>

<template>
  <div class="pb">
    <div v-if="label" class="pb-head">
      <span class="muted">{{ label }}</span>
      <span class="pb-val">{{ pct }}%</span>
    </div>
    <div
      class="pb-track"
      role="progressbar"
      :aria-valuenow="pct"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div class="pb-fill" :style="{ width: pct + '%' }" />
    </div>
  </div>
</template>

<style scoped>
.pb-head { display: flex; justify-content: space-between; font-size: var(--fs-sm); margin-bottom: 0.4rem; }
.pb-val { font-weight: 700; color: var(--text-1); }
.pb-track { height: 10px; border-radius: 999px; background: rgba(255, 255, 255, 0.08); overflow: hidden; border: 1px solid var(--glass-border); }
.pb-fill {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--aurora-2), var(--aurora-1));
  transition: width 0.8s var(--ease);
}
</style>
