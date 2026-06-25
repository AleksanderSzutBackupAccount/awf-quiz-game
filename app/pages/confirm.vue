<script setup lang="ts">
// OAuth / email callback landing page. The Supabase module exchanges the code
// for a session; once the user is populated we forward to the saved redirect.
definePageMeta({ layout: false })

const user = useSupabaseUser()
const router = useRouter()

watch(
  user,
  (u) => {
    if (u) router.replace('/')
  },
  { immediate: true }
)

// safety: if nothing happens, bounce back to login after a moment
onMounted(() => {
  setTimeout(() => {
    if (!user.value) router.replace('/login')
  }, 4000)
})
</script>

<template>
  <div class="confirm">
    <div class="app-bg" aria-hidden="true" />
    <GlassCard strong class="box">
      <div class="spinner" aria-hidden="true" />
      <p class="muted">Logowanie…</p>
    </GlassCard>
  </div>
</template>

<style scoped>
.confirm { min-height: 100dvh; display: grid; place-items: center; padding: 1.5rem; }
.box { display: flex; flex-direction: column; align-items: center; gap: 1rem; padding: var(--sp-5) var(--sp-6); }
.spinner { width: 38px; height: 38px; border-radius: 50%; border: 3px solid var(--glass-border); border-top-color: var(--accent); animation: spin 0.8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
</style>
