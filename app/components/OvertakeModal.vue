<script setup lang="ts">
import { useCelebration } from '~/composables/useCelebration'

const props = defineProps<{ names: string[] }>()
const emit = defineEmits<{ close: [] }>()

const { confetti } = useCelebration()

const label = computed(() => {
  const n = props.names.length
  if (n === 1) return `Wyprzedziłeś: ${props.names[0]}!`
  // Polish plural of "osoba" (accusative count): 2-4 → "osoby", else → "osób"
  const last = n % 10
  const teens = n % 100
  const noun = last >= 2 && last <= 4 && !(teens >= 12 && teens <= 14) ? 'osoby' : 'osób'
  return `Wyprzedziłeś ${n} ${noun} w rankingu!`
})

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape' || e.key === 'Enter') emit('close')
}
onMounted(() => {
  confetti({ count: 120, power: 1 })
  window.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <div class="overlay" role="dialog" aria-modal="true" aria-label="Awans w rankingu" @click.self="emit('close')">
    <div class="glass glass-strong card">
      <div class="badge" aria-hidden="true">🚀</div>
      <p class="eyebrow">Awans w rankingu</p>
      <h2 class="title gradient-text">{{ label }}</h2>
      <ul v-if="names.length > 1" class="names">
        <li v-for="n in names" :key="n">{{ n }}</li>
      </ul>
      <button class="btn btn-primary btn-lg" @click="emit('close')">Świetnie →</button>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed; inset: 0; z-index: 210;
  display: grid; place-items: center; padding: 1.5rem;
  background: rgba(5, 8, 18, 0.72);
  -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px);
}
.card { max-width: 440px; width: 100%; text-align: center; padding: var(--sp-5); display: flex; flex-direction: column; gap: 0.8rem; align-items: center; }
.badge {
  width: 96px; height: 96px; border-radius: 50%; display: grid; place-items: center; font-size: 2.6rem;
  background: linear-gradient(135deg, var(--aurora-1), var(--aurora-2));
  box-shadow: 0 0 0 8px rgba(124,139,255,0.18), 0 18px 40px -10px var(--accent-strong);
}
.title { font-size: var(--fs-xl); }
.names { list-style: none; display: flex; flex-wrap: wrap; gap: 0.4rem; justify-content: center; }
.names li { padding: 0.25rem 0.7rem; border-radius: var(--radius-full); background: var(--glass-bg); font-weight: 600; font-size: var(--fs-sm); }
.card .btn { margin-top: 0.6rem; }
</style>
