<script setup lang="ts">
import { useProfileStore } from '~/stores/profile'

const emit = defineEmits<{ close: [] }>()
const profile = useProfileStore()

const name = ref(profile.displayName ?? '')
const saving = ref(false)
const error = ref('')

async function save() {
  const v = name.value.trim()
  if (!v) { error.value = 'Podaj nazwę.'; return }
  saving.value = true
  error.value = ''
  try {
    await profile.setName(v)
    emit('close')
  } catch (e: any) {
    error.value = e?.message || 'Nie udało się zapisać nazwy.'
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <div class="overlay" role="dialog" aria-modal="true" aria-label="Ustaw nazwę" @click.self="emit('close')">
    <div class="glass glass-strong card">
      <p class="eyebrow">Ranking</p>
      <h2 class="title">Jak Cię pokazać w rankingu?</h2>
      <p class="muted">Wybierz nazwę widoczną dla innych graczy. Możesz ją później zmienić.</p>
      <input
        v-model="name"
        type="text"
        maxlength="40"
        placeholder="np. Ania, Kuba94…"
        class="name-input"
        @keyup.enter="save"
      />
      <p v-if="error" class="err">{{ error }}</p>
      <div class="actions">
        <button class="btn btn-ghost" @click="emit('close')">Pomiń</button>
        <button class="btn btn-primary" :disabled="saving" @click="save">{{ saving ? '…' : 'Zapisz' }}</button>
      </div>
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
.card { max-width: 440px; width: 100%; text-align: center; padding: var(--sp-5); display: flex; flex-direction: column; gap: 0.8rem; align-items: stretch; }
.title { font-size: var(--fs-xl); }
.name-input {
  width: 100%; min-height: 52px; padding: 0 1rem; font-size: var(--fs-lg);
  border-radius: var(--radius); border: 1px solid var(--glass-border);
  background: rgba(255,255,255,0.04); color: var(--text-1);
}
.name-input:focus-visible { border-color: var(--accent); box-shadow: 0 0 0 4px rgba(124,139,255,0.18); }
.err { color: var(--bad); font-size: var(--fs-sm); }
.actions { display: flex; gap: 0.6rem; justify-content: flex-end; margin-top: 0.4rem; }
</style>
