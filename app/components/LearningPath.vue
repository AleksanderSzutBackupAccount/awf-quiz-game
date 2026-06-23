<script setup lang="ts">
import { useSpecializationStore } from '~/stores/specialization'
import { useProgressStore } from '~/stores/progress'
import { useLevels, type Level } from '~/composables/useLevels'

const spec = useSpecializationStore()
const progress = useProgressStore()
const specRef = computed(() => spec.current)
const { levels, completedLevels } = useLevels(specRef)

const { $gsap, $motionOk } = useNuxtApp()
const pathRef = ref<HTMLElement | null>(null)

const activeId = ref<string | null>(null)
const activeLevel = computed(() => levels.value.find((l) => l.id === activeId.value) || null)

// overall progress fill down the spine
const progressPct = computed(() => {
  if (!levels.value.length) return 0
  const done = completedLevels.value.length
  const current = levels.value.find((l) => l.isCurrent)
  const partial = current ? current.masteredCount / Math.max(1, current.total) : 0
  return Math.min(100, Math.round(((done + partial) / levels.value.length) * 100))
})

function select(lvl: Level) {
  if (lvl.state === 'locked') {
    // nudge animation on locked node
    if ($gsap && $motionOk) {
      $gsap.fromTo(
        `#node-${lvl.index}`,
        { x: -6 },
        { x: 0, duration: 0.4, ease: 'elastic.out(1,0.3)' }
      )
    }
    return
  }
  activeId.value = activeId.value === lvl.id ? null : lvl.id
}

onMounted(() => {
  if ($gsap && $motionOk && pathRef.value) {
    $gsap.from('.node', {
      opacity: 0,
      scale: 0.6,
      y: 24,
      duration: 0.5,
      stagger: 0.08,
      ease: 'back.out(1.6)',
      scrollTrigger: { trigger: pathRef.value, start: 'top 80%' },
    })
  }
})
</script>

<template>
  <div class="lp">
    <div ref="pathRef" class="path" :style="{ '--progress': progressPct + '%' }">
      <div class="spine" aria-hidden="true"><span class="spine-fill" /></div>

      <div
        v-for="(lvl, i) in levels"
        :key="lvl.id"
        class="node-row"
        :class="i % 2 === 0 ? 'left' : 'right'"
      >
        <button
          :id="`node-${lvl.index}`"
          class="node"
          :class="[lvl.state, { current: lvl.isCurrent, open: activeId === lvl.id }]"
          :aria-label="`Poziom ${lvl.number}: ${lvl.title} — ${lvl.state === 'locked' ? 'zablokowany' : lvl.state === 'completed' ? 'ukończony' : 'dostępny'}`"
          @click="select(lvl)"
        >
          <span class="node-circle">
            <span v-if="lvl.state === 'completed'" class="node-mark">✓</span>
            <span v-else-if="lvl.state === 'locked'" class="node-mark">🔒</span>
            <span v-else class="node-mark">{{ lvl.icon }}</span>
            <span v-if="lvl.isCurrent" class="pulse" aria-hidden="true" />
          </span>
        </button>

        <div class="node-info">
          <span class="node-lvl">Poziom {{ lvl.number }}</span>
          <span class="node-title">{{ lvl.title }}</span>
          <span class="node-prog" :class="{ done: lvl.state === 'completed' }">
            {{ lvl.masteredCount }}/{{ lvl.total }} opanowane
          </span>
        </div>
      </div>
    </div>

    <!-- level detail -->
    <Transition name="detail">
      <GlassCard v-if="activeLevel" strong class="detail">
        <div class="detail-head">
          <div>
            <p class="eyebrow">Poziom {{ activeLevel.number }} · {{ activeLevel.icon }}</p>
            <h3>{{ activeLevel.title }}</h3>
          </div>
          <button class="btn btn-ghost close" aria-label="Zamknij" @click="activeId = null">✕</button>
        </div>
        <ul class="detail-topics">
          <li v-for="t in activeLevel.topics" :key="t.id">
            <NuxtLink :to="`/wiki/${t.id}`" class="dt-link">
              <span class="dt-check" :class="{ on: progress.isTopicMastered(t.id) }">
                {{ progress.isTopicMastered(t.id) ? '✓' : '○' }}
              </span>
              {{ t.title }}
            </NuxtLink>
          </li>
        </ul>
        <NuxtLink :to="`/quiz?cat=${activeLevel.categoryId}`" class="btn btn-primary btn-block">
          🎯 Ćwicz ten poziom
        </NuxtLink>
      </GlassCard>
    </Transition>
  </div>
</template>

<style scoped>
.lp { display: flex; flex-direction: column; gap: var(--sp-4); }
.path { position: relative; display: flex; flex-direction: column; gap: 1.4rem; padding: 0.5rem 0; }

/* central spine with progress fill */
.spine {
  position: absolute; left: 44px; top: 20px; bottom: 20px; width: 4px;
  background: rgba(255, 255, 255, 0.08); border-radius: 999px; overflow: hidden;
}
.spine-fill {
  position: absolute; top: 0; left: 0; right: 0; height: var(--progress);
  background: linear-gradient(var(--aurora-2), var(--aurora-1));
  transition: height 1s var(--ease);
}

.node-row { display: flex; align-items: center; gap: 1rem; position: relative; }
.node { background: none; border: 0; padding: 0; cursor: pointer; flex: none; }

.node-circle {
  position: relative; width: 72px; height: 72px; border-radius: 50%;
  display: grid; place-items: center; font-size: 1.8rem;
  border: 2px solid var(--glass-border);
  background: var(--glass-bg-strong);
  -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px);
  transition: transform 0.25s var(--ease), box-shadow 0.25s, border-color 0.25s;
}
.node:hover .node-circle { transform: scale(1.08); }
.node.locked { cursor: not-allowed; }
.node.locked .node-circle { opacity: 0.5; filter: grayscale(0.6); }
.node.unlocked .node-circle { border-color: var(--accent); }
.node.completed .node-circle {
  background: linear-gradient(135deg, #34d399, #2bd2ff);
  border-color: transparent; color: #04241a;
}
.node.completed .node-mark { font-weight: 900; }
.node.current .node-circle {
  border-color: var(--aurora-2);
  box-shadow: 0 0 0 4px rgba(43, 210, 255, 0.18), 0 10px 30px -8px var(--aurora-2);
}
.node.open .node-circle { box-shadow: 0 0 0 4px rgba(124,139,255,0.3); }

.pulse {
  position: absolute; inset: -2px; border-radius: 50%;
  border: 2px solid var(--aurora-2); animation: pulse 1.8s var(--ease) infinite;
}
@keyframes pulse {
  0% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(1.5); opacity: 0; }
}

.node-info { display: flex; flex-direction: column; gap: 0.1rem; }
.node-lvl { font-size: var(--fs-xs); text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-3); font-weight: 700; }
.node-title { font-weight: 700; font-size: var(--fs-base); }
.node-prog { font-size: var(--fs-xs); color: var(--text-3); }
.node-prog.done { color: var(--ok); }

/* alternate label rhythm on wider screens */
@media (min-width: 620px) {
  .node-row.right { flex-direction: row-reverse; justify-content: flex-end; margin-left: 120px; }
  .node-row.right .node-info { text-align: right; }
  .node-row.right .node-circle { margin-right: 0; }
}

.detail { display: flex; flex-direction: column; gap: 0.9rem; }
.detail-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; }
.detail-head h3 { font-size: var(--fs-lg); }
.close { padding: 0.3rem 0.7rem; min-height: auto; }
.detail-topics { list-style: none; display: flex; flex-direction: column; gap: 0.3rem; }
.dt-link { display: flex; align-items: center; gap: 0.6rem; padding: 0.5rem 0.6rem; border-radius: 10px; color: var(--text-2); transition: 0.2s; }
.dt-link:hover { background: var(--glass-bg); color: var(--text-1); }
.dt-check { width: 22px; height: 22px; border-radius: 50%; display: grid; place-items: center; font-size: 0.8rem; border: 1px solid var(--glass-border); color: var(--text-3); }
.dt-check.on { background: var(--ok-bg); color: var(--ok); border-color: rgba(52,211,153,0.4); }

.detail-enter-active, .detail-leave-active { transition: opacity 0.3s, transform 0.3s; }
.detail-enter-from, .detail-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
