<script setup lang="ts">
import { useProfileStore } from '~/stores/profile'
import { useNameModal } from '~/composables/useNameModal'

const profile = useProfileStore()
const { open, dismissed } = useNameModal()

// Auto-pokaż gdy zalogowany user nie ma jeszcze nazwy i jej nie pominął.
const showName = computed(() => open.value || (profile.loaded && !profile.displayName && !dismissed.value))
function closeName() {
  open.value = false
  dismissed.value = true
}
</script>

<template>
  <div class="layout">
    <AppHeader />
    <main id="main" class="main">
      <slot />
    </main>
    <footer class="ftr">
      <div class="container ftr-inner">
        <span class="dim">AWF Licencjat — baza wiedzy i quizy do nauki.</span>
        <span class="dim">Materiały opracowane na podstawie zagadnień egzaminacyjnych.</span>
      </div>
    </footer>
    <NameModal v-if="showName" @close="closeName" />
  </div>
</template>

<style scoped>
.layout { display: flex; flex-direction: column; min-height: 100dvh; }
.main { flex: 1; }
.ftr { padding: var(--sp-5) 0 var(--sp-4); margin-top: var(--sp-6); border-top: 1px solid var(--glass-border); }
.ftr-inner { display: flex; flex-wrap: wrap; gap: 0.5rem 1.5rem; justify-content: space-between; font-size: var(--fs-xs); }
</style>
