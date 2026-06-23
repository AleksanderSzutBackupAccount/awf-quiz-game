<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: string
    strong?: boolean
    interactive?: boolean
  }>(),
  { as: 'div', strong: false, interactive: false }
)
</script>

<template>
  <component
    :is="as"
    class="glass glass-card"
    :class="{ 'glass-strong': strong, interactive }"
  >
    <slot />
  </component>
</template>

<style scoped>
.glass-card {
  padding: var(--sp-4);
  display: block;
}
.interactive {
  cursor: pointer;
  transition: transform var(--dur) var(--ease), border-color var(--dur) var(--ease),
    box-shadow var(--dur) var(--ease);
  will-change: transform;
}
.interactive:hover {
  transform: translateY(-4px);
  border-color: var(--glass-border-strong);
  box-shadow: 0 26px 60px -18px rgba(2, 6, 23, 0.85);
}
</style>
