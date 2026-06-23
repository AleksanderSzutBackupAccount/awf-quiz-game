<script setup lang="ts">
import type { TrueFalseQuestion } from '~/content/types'

const props = defineProps<{
  question: TrueFalseQuestion
  selected: boolean | null
  revealed: boolean
}>()
const emit = defineEmits<{ select: [value: boolean] }>()

function stateFor(val: boolean) {
  if (!props.revealed) return { selected: props.selected === val }
  return {
    correct: val === props.question.correct,
    wrong: props.selected === val && val !== props.question.correct,
    faded: props.selected !== val && val !== props.question.correct,
  }
}
</script>

<template>
  <div class="tf">
    <h2 class="q">{{ question.q }}</h2>
    <div class="tf-opts">
      <button class="tf-btn" :class="stateFor(true)" :disabled="revealed" @click="emit('select', true)">
        <span class="ic" aria-hidden="true">✓</span> Prawda
      </button>
      <button class="tf-btn" :class="stateFor(false)" :disabled="revealed" @click="emit('select', false)">
        <span class="ic" aria-hidden="true">✕</span> Fałsz
      </button>
    </div>
  </div>
</template>

<style scoped>
.q { font-size: var(--fs-xl); margin-bottom: var(--sp-4); }
.tf-opts { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.tf-btn {
  display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
  padding: 1.8rem 1rem; border-radius: var(--radius);
  background: var(--glass-bg); border: 1px solid var(--glass-border); color: var(--text-1);
  font: inherit; font-size: var(--fs-lg); font-weight: 700; cursor: pointer;
  transition: transform 0.2s var(--ease), border-color 0.2s, background 0.2s;
}
.tf-btn:not(:disabled):hover { transform: translateY(-3px); border-color: var(--glass-border-strong); }
.ic { font-size: 1.8rem; }
.tf-btn.selected { border-color: var(--accent); box-shadow: 0 0 0 2px rgba(124,139,255,0.3); }
.tf-btn.correct { border-color: var(--ok); background: var(--ok-bg); color: var(--ok); }
.tf-btn.wrong { border-color: var(--bad); background: var(--bad-bg); color: var(--bad); }
.tf-btn.faded { opacity: 0.5; }
@media (max-width: 460px) { .tf-opts { grid-template-columns: 1fr; } }
</style>
