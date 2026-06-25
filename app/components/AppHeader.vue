<script setup lang="ts">
import { useSpecializationStore } from '~/stores/specialization'
import { useContent } from '~/composables/useContent'
import { getDeviceId } from '~/composables/useDeviceId'

const spec = useSpecializationStore()
const { getSpecialization } = useContent()
const route = useRoute()
const router = useRouter()

const supabase = useSupabaseClient()
const user = useSupabaseUser()

async function logout() {
  try {
    await supabase.rpc('unregister_device', { p_device_id: getDeviceId() })
  } catch {
    /* ignore — sign out regardless */
  }
  await supabase.auth.signOut()
  await navigateTo('/login')
}

const currentSpec = computed(() =>
  spec.current ? getSpecialization(spec.current) : null
)

// Clear the chosen specialization and go to the picker on the home page.
function changeSpecialization() {
  spec.clear()
  menuOpen.value = false
  router.push('/')
}

const menuOpen = ref(false)
watch(
  () => route.fullPath,
  () => (menuOpen.value = false)
)

const links = [
  { to: '/', label: 'Start' },
  { to: '/wiki', label: 'Baza wiedzy' },
  { to: '/quiz', label: 'Quiz' },
]
</script>

<template>
  <header class="hdr">
    <div class="container hdr-inner glass glass-strong">
      <NuxtLink to="/" class="brand" aria-label="Strona główna">
        <span class="brand-mark" aria-hidden="true">AWF</span>
        <span class="brand-text">Licencjat<small>nauka & quizy</small></span>
      </NuxtLink>

      <button
        class="burger"
        :aria-expanded="menuOpen"
        aria-label="Menu"
        @click="menuOpen = !menuOpen"
      >
        <span /><span /><span />
      </button>

      <nav class="nav" :class="{ open: menuOpen }" aria-label="Główna nawigacja">
        <NuxtLink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="nav-link"
          active-class="active"
        >
          {{ l.label }}
        </NuxtLink>

        <button
          v-if="currentSpec"
          type="button"
          class="spec-chip chip"
          title="Zmień specjalizację"
          @click="changeSpecialization"
        >
          <span aria-hidden="true">{{ currentSpec.icon }}</span>
          {{ currentSpec.short }}
          <span class="spec-swap">zmień</span>
        </button>

        <button
          v-if="user"
          type="button"
          class="logout-btn"
          :title="user.email || 'Wyloguj'"
          @click="logout"
        >
          <span class="logout-ico" aria-hidden="true">⏻</span>
          <span class="logout-label">Wyloguj</span>
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.hdr {
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 0.7rem 0;
}
.hdr-inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.55rem 0.9rem 0.55rem 0.7rem;
  border-radius: var(--radius-full);
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}
.brand-mark {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  font-size: 0.8rem;
  background: linear-gradient(120deg, var(--accent-strong), var(--aurora-2));
  color: #fff;
  box-shadow: 0 8px 20px -8px var(--accent-strong);
}
.brand-text { display: flex; flex-direction: column; line-height: 1.05; font-size: 1.05rem; }
.brand-text small { font-size: 0.62rem; font-weight: 600; color: var(--text-3); letter-spacing: 0.12em; text-transform: uppercase; }

.nav { display: flex; align-items: center; gap: 0.35rem; }
.nav-link {
  padding: 0.5rem 0.9rem;
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: var(--fs-sm);
  color: var(--text-2);
  transition: color 0.25s, background 0.25s;
}
.nav-link:hover { color: var(--text-1); background: var(--glass-bg); }
.nav-link.active { color: var(--text-1); background: var(--glass-bg-strong); }

.spec-chip {
  margin-left: 0.4rem;
  cursor: pointer;
  font: inherit;
  font-size: var(--fs-xs);
  font-weight: 600;
  color: var(--text-1);
}
.spec-swap {
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent);
  border-left: 1px solid var(--glass-border);
  padding-left: 0.45rem;
}
.logout-btn {
  display: inline-flex; align-items: center; gap: 0.4rem;
  margin-left: 0.4rem; padding: 0.45rem 0.75rem;
  border-radius: var(--radius-full); border: 1px solid var(--glass-border);
  background: var(--glass-bg); color: var(--text-2); font: inherit;
  font-size: var(--fs-xs); font-weight: 600; cursor: pointer; transition: 0.2s;
}
.logout-btn:hover { color: var(--bad); border-color: rgba(251,113,133,0.4); }
.logout-ico { font-size: 0.95rem; }

.burger { display: none; background: none; border: 0; cursor: pointer; padding: 0.5rem; flex-direction: column; gap: 5px; }
.burger span { display: block; width: 22px; height: 2px; background: var(--text-1); border-radius: 2px; transition: 0.25s; }

@media (max-width: 720px) {
  .burger { display: flex; }
  .nav {
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0.3rem;
    padding: 0.7rem;
    border-radius: var(--radius);
    background: var(--bg-2);
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
    display: none;
  }
  .nav.open { display: flex; }
  .spec-chip { margin-left: 0; justify-content: center; }
}
</style>
