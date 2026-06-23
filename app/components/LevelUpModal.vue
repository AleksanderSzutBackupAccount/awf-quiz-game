<script setup lang="ts">
const props = defineProps<{ levelTitle: string; levelNumber: number }>()
const emit = defineEmits<{ close: [] }>()

const { confetti } = useCelebration()
const { $gsap, $motionOk } = useNuxtApp()
const cardRef = ref<HTMLElement | null>(null)

onMounted(() => {
  confetti({ count: 160, power: 1.2 })
  if ($gsap && $motionOk && cardRef.value) {
    $gsap.fromTo(
      cardRef.value,
      { scale: 0.7, opacity: 0, y: 30 },
      { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: 'back.out(1.7)' }
    )
    $gsap.fromTo(
      '.lvl-badge',
      { scale: 0, rotate: -40 },
      { scale: 1, rotate: 0, duration: 0.7, delay: 0.15, ease: 'back.out(2)' }
    )
  }
})

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape' || e.key === 'Enter') emit('close')
}
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <div class="overlay" role="dialog" aria-modal="true" :aria-label="`Poziom ${levelNumber} ukończony`" @click.self="emit('close')">
    <div ref="cardRef" class="glass glass-strong card">
      <div class="lvl-badge" aria-hidden="true">
        <span class="lvl-num">{{ levelNumber }}</span>
        <span class="lvl-star">★</span>
      </div>
      <p class="eyebrow">Poziom ukończony</p>
      <h2 class="title gradient-text">Brawo! 🎉</h2>
      <p class="muted">Opanowałeś poziom <strong>„{{ levelTitle }}"</strong>. Odblokowano kolejny etap nauki!</p>
      <button class="btn btn-primary btn-lg" @click="emit('close')">Lecimy dalej →</button>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed; inset: 0; z-index: 200;
  display: grid; place-items: center; padding: 1.5rem;
  background: rgba(5, 8, 18, 0.72);
  -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px);
}
.card {
  max-width: 440px; width: 100%; text-align: center;
  padding: var(--sp-5); display: flex; flex-direction: column; gap: 0.8rem; align-items: center;
}
.lvl-badge {
  position: relative; width: 110px; height: 110px; border-radius: 50%;
  display: grid; place-items: center; margin-bottom: 0.5rem;
  background: linear-gradient(135deg, var(--aurora-1), var(--aurora-2));
  box-shadow: 0 0 0 8px rgba(124,139,255,0.18), 0 18px 40px -10px var(--accent-strong);
}
.lvl-num { font-size: 3rem; font-weight: 900; color: #fff; line-height: 1; }
.lvl-star { position: absolute; top: -6px; right: -2px; font-size: 1.8rem; color: var(--warn); filter: drop-shadow(0 2px 6px rgba(0,0,0,.4)); }
.title { font-size: var(--fs-2xl); }
.card .btn { margin-top: 0.6rem; }
</style>
