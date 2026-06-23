<script setup lang="ts">
import type { AbcdQuestion } from '~/content/types'

const props = defineProps<{
  question: AbcdQuestion
  selected: number | null
  revealed: boolean
}>()
const emit = defineEmits<{ select: [index: number] }>()

const letters = ['A', 'B', 'C', 'D']

function classFor(i: number) {
  if (!props.revealed) return { selected: props.selected === i }
  return {
    correct: i === props.question.correct,
    wrong: props.selected === i && i !== props.question.correct,
    faded: props.selected !== i && i !== props.question.correct,
  }
}
</script>

<template>
  <div class="abcd">
    <h2 class="q">{{ question.q }}</h2>
    <ul class="opts">
      <li v-for="(opt, i) in question.options" :key="i">
        <button
          class="opt"
          :class="classFor(i)"
          :disabled="revealed"
          @click="emit('select', i)"
        >
          <span class="letter">{{ letters[i] }}</span>
          <span class="text">{{ opt }}</span>
          <span v-if="revealed && i === question.correct" class="mark" aria-hidden="true">✓</span>
          <span
            v-else-if="revealed && selected === i"
            class="mark mark-bad"
            aria-hidden="true"
          >✕</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.q { font-size: var(--fs-xl); margin-bottom: var(--sp-4); }
.opts { list-style: none; display: flex; flex-direction: column; gap: 0.8rem; }
.opt {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.9rem;
  text-align: left;
  padding: 1rem 1.1rem;
  border-radius: var(--radius);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--text-1);
  font: inherit;
  font-size: var(--fs-base);
  cursor: pointer;
  transition: transform 0.2s var(--ease), border-color 0.2s, background 0.2s;
}
.opt:not(:disabled):hover { transform: translateX(4px); border-color: var(--glass-border-strong); }
.opt:disabled { cursor: default; }
.letter {
  flex: none; width: 34px; height: 34px; border-radius: 10px; display: grid; place-items: center;
  font-weight: 800; background: rgba(255,255,255,0.08); border: 1px solid var(--glass-border);
}
.text { flex: 1; }
.mark { font-weight: 800; font-size: 1.2rem; color: var(--ok); }
.mark-bad { color: var(--bad); }

.opt.selected { border-color: var(--accent); box-shadow: 0 0 0 2px rgba(124,139,255,0.3); }
.opt.correct { border-color: var(--ok); background: var(--ok-bg); }
.opt.correct .letter { background: var(--ok); color: #06281c; }
.opt.wrong { border-color: var(--bad); background: var(--bad-bg); }
.opt.wrong .letter { background: var(--bad); color: #2b0a12; }
.opt.faded { opacity: 0.55; }
</style>
