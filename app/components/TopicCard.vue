<script setup lang="ts">
import { useContent } from '~/composables/useContent'
import { useProgressStore } from '~/stores/progress'
import type { Topic } from '~/content/types'

const props = defineProps<{ topic: Topic }>()
const { getCategory, countQuestions } = useContent()
const progress = useProgressStore()

const cat = computed(() => getCategory(props.topic.category))
const mastery = computed(() => progress.topicMastery(props.topic.id))
const mastered = computed(
  () => mastery.value.seen > 0 && mastery.value.correct / mastery.value.seen >= 0.8
)
</script>

<template>
  <NuxtLink :to="`/wiki/${topic.id}`" class="tc-link">
    <GlassCard interactive class="tc">
      <div class="tc-top">
        <span class="chip">{{ cat?.icon }} {{ cat?.name }}</span>
        <span v-if="mastered" class="chip ok" title="Opanowane">✓</span>
      </div>
      <h3 class="tc-title">{{ topic.title }}</h3>
      <p class="muted tc-sum">{{ topic.summary }}</p>
      <div class="tc-foot dim">
        <span>Zagadnienie {{ topic.number }}</span>
        <span>{{ countQuestions(topic) }} pytań →</span>
      </div>
    </GlassCard>
  </NuxtLink>
</template>

<style scoped>
.tc-link { color: inherit; display: block; height: 100%; }
.tc { height: 100%; display: flex; flex-direction: column; gap: 0.55rem; }
.tc-top { display: flex; justify-content: space-between; align-items: center; gap: 0.5rem; }
.chip.ok { color: var(--ok); border-color: rgba(52,211,153,0.4); background: var(--ok-bg); }
.tc-title { font-size: var(--fs-lg); }
.tc-sum { flex: 1; font-size: var(--fs-sm); }
.tc-foot { display: flex; justify-content: space-between; font-size: var(--fs-xs); font-weight: 600; }
</style>
