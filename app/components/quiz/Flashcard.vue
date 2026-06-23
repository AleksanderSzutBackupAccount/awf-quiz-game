<script setup lang="ts">
import type { FlashQuestion } from '~/content/types'

defineProps<{ question: FlashQuestion }>()
const emit = defineEmits<{ rate: [value: 'known' | 'review'] }>()

const flipped = ref(false)
function toggle() {
  flipped.value = !flipped.value
}
</script>

<template>
  <div class="flash">
    <button
      class="card"
      :class="{ flipped }"
      :aria-pressed="flipped"
      @click="toggle"
    >
      <div class="face front">
        <span class="eyebrow">Pytanie</span>
        <p class="ftext">{{ question.front }}</p>
        <span class="hint dim">Kliknij lub naciśnij spację, aby zobaczyć odpowiedź</span>
      </div>
      <div class="face back">
        <span class="eyebrow">Odpowiedź</span>
        <p class="ftext">{{ question.back }}</p>
      </div>
    </button>

    <div class="rate" :class="{ visible: flipped }">
      <button class="btn rate-review" :disabled="!flipped" @click="emit('rate', 'review')">
        ↺ Powtórz
      </button>
      <button class="btn rate-known" :disabled="!flipped" @click="emit('rate', 'known')">
        ✓ Umiem
      </button>
    </div>
  </div>
</template>

<style scoped>
.flash { display: flex; flex-direction: column; gap: var(--sp-4); align-items: center; }
.card {
  width: 100%;
  min-height: 280px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s var(--ease);
  cursor: pointer;
  background: none; border: 0; padding: 0; font: inherit; color: inherit;
}
.card.flipped { transform: rotateY(180deg); }
.face {
  position: absolute;
  inset: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
  padding: var(--sp-5);
  border-radius: var(--radius-lg);
  background: var(--glass-bg-strong);
  border: 1px solid var(--glass-border-strong);
  -webkit-backdrop-filter: blur(var(--glass-blur));
  backdrop-filter: blur(var(--glass-blur));
  box-shadow: var(--glass-shadow);
}
.front { background-image: radial-gradient(120% 100% at 0 0, rgba(109,94,252,0.18), transparent 60%); }
.back {
  transform: rotateY(180deg);
  background-image: radial-gradient(120% 100% at 100% 0, rgba(43,210,255,0.18), transparent 60%);
}
.ftext { font-size: var(--fs-lg); font-weight: 600; max-width: 46ch; }
.hint { font-size: var(--fs-xs); }

.rate { display: flex; gap: 0.8rem; opacity: 0.35; transition: opacity 0.3s; }
.rate.visible { opacity: 1; }
.rate .btn { min-width: 130px; }
.rate-known { border-color: rgba(52,211,153,0.5); color: var(--ok); }
.rate-known:hover { background: var(--ok-bg); }
.rate-review { border-color: rgba(251,191,36,0.5); color: var(--warn); }

@media (prefers-reduced-motion: reduce) {
  .card { transition: none; }
}
</style>
