<script setup lang="ts">
import { useSpecializationStore } from '~/stores/specialization'
import { useProgressStore } from '~/stores/progress'
import { useContent } from '~/composables/useContent'
import { useReveal } from '~/composables/useReveal'
import type { SpecializationId } from '~/content/types'

const spec = useSpecializationStore()
const progress = useProgressStore()
const { allSpecializations, topicsBySpec, categoriesForSpec, getSpecialization } = useContent()
const { reveal } = useReveal()
const { $gsap, $motionOk } = useNuxtApp()

const heroRef = ref<HTMLElement | null>(null)
const bodyRef = ref<HTMLElement | null>(null)

const chosen = computed(() =>
  spec.current ? getSpecialization(spec.current) : null
)
const specTopics = computed(() =>
  spec.current ? topicsBySpec(spec.current) : []
)
const specCats = computed(() =>
  spec.current ? categoriesForSpec(spec.current) : []
)
const masteredCount = computed(() =>
  progress.masteredCount(specTopics.value.map((t) => t.id))
)

function pick(id: SpecializationId) {
  spec.choose(id)
  nextTick(() => {
    reveal()
    bodyRef.value?.scrollIntoView({ behavior: $motionOk ? 'smooth' : 'auto', block: 'start' })
  })
}

function changeSpec() {
  spec.clear()
  nextTick(() => reveal())
}

onMounted(() => {
  if ($gsap && $motionOk && heroRef.value) {
    const tl = $gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.6 })
      .from('.hero-title span', { y: 40, opacity: 0, duration: 0.8, stagger: 0.12 }, '-=0.2')
      .from('.hero-lead', { y: 24, opacity: 0, duration: 0.6 }, '-=0.4')
      .from('.hero-orb', { scale: 0.6, opacity: 0, duration: 1.1, stagger: 0.15 }, '-=0.9')
  }
  nextTick(() => reveal())
})

// reveal whichever branch (picker / dashboard) is shown after hydration changes state
watch(
  () => spec.current,
  () => nextTick(() => reveal())
)
</script>

<template>
  <div>
    <!-- HERO -->
    <section ref="heroRef" class="hero container">
      <div class="hero-orbs" aria-hidden="true">
        <span class="hero-orb o1" /><span class="hero-orb o2" /><span class="hero-orb o3" />
      </div>
      <p class="eyebrow hero-eyebrow">✦ Twoja baza do licencjatu</p>
      <h1 class="hero-title">
        <span>Ucz się mądrzej,</span>
        <span class="gradient-text">zdaj spokojnie.</span>
      </h1>
      <p class="hero-lead muted">
        Nowoczesna baza wiedzy w formie wiki i quizy, które od razu pokazują Twoje błędy
        i odsyłają do właściwego zagadnienia. Wybierz specjalizację i zacznij naukę.
      </p>
    </section>

    <!-- SPECIALIZATION PICKER (first choice) -->
    <section v-if="!chosen" class="section container">
      <header class="sec-head reveal">
        <h2>Wybierz swoją <span class="gradient-text">specjalizację</span></h2>
        <p class="muted">Cała baza wiedzy i quizy dopasują się do wybranego zestawu zagadnień.</p>
      </header>

      <div class="grid grid-2 picker">
        <GlassCard
          v-for="(s, i) in allSpecializations"
          :key="s.id"
          as="button"
          interactive
          strong
          class="spec-card reveal"
          :data-reveal-delay="0.08 * i"
          @click="pick(s.id)"
        >
          <div class="spec-icon" :style="{ background: s.accent }" aria-hidden="true">
            {{ s.icon }}
          </div>
          <h3>{{ s.name }}</h3>
          <p class="spec-tag dim">{{ s.tagline }}</p>
          <p class="muted spec-desc">{{ s.description }}</p>
          <span class="btn btn-primary spec-go">Wybieram <span aria-hidden="true">→</span></span>
        </GlassCard>
      </div>
    </section>

    <!-- DASHBOARD (after choosing) -->
    <section v-else ref="bodyRef" class="section container">
      <div class="dash-head reveal">
        <div>
          <p class="eyebrow">Specjalizacja</p>
          <h2>{{ chosen.icon }} {{ chosen.name }}</h2>
        </div>
        <button class="btn btn-ghost" @click="changeSpec">↺ Zmień specjalizację</button>
      </div>

      <div class="reveal"><XpBar /></div>

      <GlassCard strong class="reveal cta-card" :data-reveal-delay="0.05">
        <ProgressBar
          :value="masteredCount"
          :max="specTopics.length"
          label="Twój postęp nauki"
        />
        <div class="cta-actions">
          <NuxtLink to="/wiki" class="btn btn-lg">📖 Otwórz bazę wiedzy</NuxtLink>
          <NuxtLink to="/quiz" class="btn btn-primary btn-lg">🎯 Rozpocznij quiz</NuxtLink>
        </div>
      </GlassCard>

      <div class="reveal path-head">
        <h3>Ścieżka nauki</h3>
        <p class="muted">Przechodź poziom po poziomie — odblokowuj kolejne etapy, opanowując zagadnienia w quizach.</p>
      </div>
      <div class="reveal"><LearningPath /></div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  padding-block: clamp(3.5rem, 8vw, 7rem) var(--sp-5);
  text-align: center;
  max-width: 900px;
}
.hero-title { font-size: var(--fs-3xl); margin: 0.4rem 0 1rem; }
.hero-title span { display: block; }
.hero-lead { font-size: var(--fs-lg); max-width: 640px; margin-inline: auto; }
.hero-orbs { position: absolute; inset: 0; pointer-events: none; overflow: visible; }
.hero-orb { position: absolute; border-radius: 50%; filter: blur(40px); opacity: 0.55; }
.o1 { width: 280px; height: 280px; background: var(--aurora-1); top: -40px; left: -60px; }
.o2 { width: 220px; height: 220px; background: var(--aurora-2); top: 20px; right: -40px; }
.o3 { width: 200px; height: 200px; background: var(--aurora-3); bottom: -80px; left: 40%; }

.sec-head { text-align: center; margin-bottom: var(--sp-5); }
.sec-head p { margin-top: 0.5rem; }

.picker { align-items: stretch; }
.spec-card { text-align: left; display: flex; flex-direction: column; gap: 0.5rem; color: inherit; font: inherit; }
.spec-icon {
  width: 64px; height: 64px; border-radius: 18px; display: grid; place-items: center;
  font-size: 2rem; margin-bottom: 0.4rem; box-shadow: 0 12px 30px -12px rgba(0,0,0,0.6);
}
.spec-tag { font-weight: 600; }
.spec-desc { flex: 1; }
.spec-go { align-self: flex-start; margin-top: 0.8rem; }

.dash-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 1rem; flex-wrap: wrap; margin-bottom: var(--sp-4); }
.dash-grid { grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr)); margin-bottom: var(--sp-4); }
.stat { text-align: center; }
.stat-num { font-size: var(--fs-2xl); font-weight: 800; line-height: 1; }

.cta-card { margin-bottom: var(--sp-5); }
.cta-actions { display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: var(--sp-4); }
.cta-actions .btn { flex: 1; min-width: 220px; }

.cats-title { margin-bottom: var(--sp-3); }
.path-head { margin: var(--sp-5) 0 var(--sp-3); }
.path-head h3 { font-size: var(--fs-xl); }
.path-head p { margin-top: 0.3rem; max-width: 560px; }
.cat-card { display: flex; align-items: center; gap: 0.8rem; }
.cat-icon { font-size: 1.6rem; }
.cat-name { font-weight: 600; }
</style>
