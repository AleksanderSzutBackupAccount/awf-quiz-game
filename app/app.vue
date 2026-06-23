<script setup lang="ts">
import { useSpecializationStore } from '~/stores/specialization'
import { useProgressStore } from '~/stores/progress'

// Hydrate persisted state on client mount.
const spec = useSpecializationStore()
const progress = useProgressStore()
onMounted(() => {
  spec.hydrate()
  progress.hydrate()
})
</script>

<template>
  <div>
    <div class="app-bg" aria-hidden="true" />
    <a href="#main" class="skip-link">Przejdź do treści</a>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.skip-link {
  position: fixed;
  top: 0.6rem;
  left: 0.6rem;
  transform: translateY(-160%);
  z-index: 100;
  padding: 0.6rem 1rem;
  border-radius: 999px;
  background: var(--accent-strong);
  color: #fff;
  font-weight: 600;
  transition: transform 0.2s ease;
}
.skip-link:focus { transform: translateY(0); }
</style>
