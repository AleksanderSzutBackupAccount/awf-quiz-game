<script setup lang="ts">
definePageMeta({ layout: false })

const supabase = useSupabaseClient()
const user = useSupabaseUser()
const router = useRouter()

const evicted = useState<boolean>('awf:evicted', () => false)

const mode = ref<'login' | 'signup'>('login')
const email = ref('')
const password = ref('')
const showPass = ref(false)
const loading = ref(false)
const error = ref('')
const notice = ref('')

// already logged in → leave the login page
watchEffect(() => {
  if (user.value) router.replace('/')
})

const redirectTo = computed(() =>
  import.meta.client ? `${window.location.origin}/confirm` : undefined
)

async function withEmail() {
  error.value = ''
  notice.value = ''
  loading.value = true
  try {
    if (mode.value === 'signup') {
      const { error: e } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
      })
      if (e) throw e
      notice.value =
        'Konto utworzone. Zaloguj się — zobaczysz instrukcję aktywacji dostępu.'
      mode.value = 'login'
    } else {
      const { error: e } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
      })
      if (e) throw e
      // navigation handled by watchEffect once user populates
    }
  } catch (e: any) {
    error.value = e?.message || 'Coś poszło nie tak.'
  } finally {
    loading.value = false
  }
}

async function withGoogle() {
  error.value = ''
  loading.value = true
  const { error: e } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: redirectTo.value },
  })
  if (e) {
    error.value = e.message
    loading.value = false
  }
}
</script>

<template>
  <div class="auth-wrap">
    <div class="app-bg" aria-hidden="true" />
    <GlassCard strong class="auth-card">
      <div class="brand">
        <span class="brand-mark" aria-hidden="true">AWF</span>
        <div><strong>Licencjat</strong><small>nauka & quizy</small></div>
      </div>

      <h1>{{ mode === 'login' ? 'Zaloguj się' : 'Załóż konto' }}</h1>
      <p class="muted sub">Dostęp do bazy wiedzy i quizów — maks. 2 urządzenia na konto.</p>

      <p v-if="evicted" class="msg warn">
        Zostałeś wylogowany — na koncie zalogowano się na nowym urządzeniu (limit 2 urządzeń).
      </p>

      <button class="btn btn-block google" :disabled="loading" @click="withGoogle">
        <span class="g" aria-hidden="true">G</span> Kontynuuj z Google
      </button>

      <div class="divider"><span>lub e-mailem</span></div>

      <form class="form" @submit.prevent="withEmail">
        <label class="field">
          <span class="field-label">E-mail</span>
          <span class="field-control">
            <span class="field-ico" aria-hidden="true">✉</span>
            <input
              v-model="email"
              type="email"
              required
              placeholder="twoj@email.pl"
              autocomplete="email"
            />
          </span>
        </label>

        <label class="field">
          <span class="field-label">Hasło</span>
          <span class="field-control">
            <span class="field-ico" aria-hidden="true">🔒</span>
            <input
              v-model="password"
              :type="showPass ? 'text' : 'password'"
              required
              minlength="6"
              placeholder="min. 6 znaków"
              :autocomplete="mode === 'login' ? 'current-password' : 'new-password'"
            />
            <button
              type="button"
              class="field-toggle"
              :aria-label="showPass ? 'Ukryj hasło' : 'Pokaż hasło'"
              @click="showPass = !showPass"
            >
              {{ showPass ? '🙈' : '👁' }}
            </button>
          </span>
        </label>

        <button class="btn btn-primary btn-block btn-lg submit" type="submit" :disabled="loading">
          {{ loading ? '…' : mode === 'login' ? 'Zaloguj się' : 'Utwórz konto' }}
        </button>
      </form>

      <p v-if="error" class="msg err">{{ error }}</p>
      <p v-if="notice" class="msg ok">{{ notice }}</p>

      <p class="switch dim">
        {{ mode === 'login' ? 'Nie masz konta?' : 'Masz już konto?' }}
        <button class="link" @click="mode = mode === 'login' ? 'signup' : 'login'">
          {{ mode === 'login' ? 'Zarejestruj się' : 'Zaloguj się' }}
        </button>
      </p>
    </GlassCard>
  </div>
</template>

<style scoped>
.auth-wrap { min-height: 100dvh; display: grid; place-items: center; padding: 1.5rem; }
.auth-card { width: 100%; max-width: 460px; display: flex; flex-direction: column; gap: 1.1rem; padding: clamp(1.5rem, 4vw, 2.4rem); }
.brand { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.2rem; }
.brand div { display: flex; flex-direction: column; line-height: 1.05; }
.brand small { font-size: 0.62rem; font-weight: 600; color: var(--text-3); letter-spacing: 0.12em; text-transform: uppercase; }
.brand-mark { display: grid; place-items: center; width: 44px; height: 44px; border-radius: 13px; font-size: 0.85rem; font-weight: 800; background: linear-gradient(120deg, var(--accent-strong), var(--aurora-2)); color: #fff; box-shadow: 0 8px 22px -8px var(--accent-strong); }
h1 { font-size: var(--fs-2xl); }
.sub { font-size: var(--fs-sm); margin-top: -0.4rem; }

.google { gap: 0.6rem; font-weight: 700; min-height: 54px; font-size: var(--fs-base); }
.google .g { display: grid; place-items: center; width: 24px; height: 24px; border-radius: 6px; background: #fff; color: #4285f4; font-weight: 900; }

.divider { display: flex; align-items: center; gap: 0.8rem; color: var(--text-3); font-size: var(--fs-xs); text-transform: uppercase; letter-spacing: 0.1em; }
.divider::before, .divider::after { content: ''; flex: 1; height: 1px; background: var(--glass-border); }

.form { display: flex; flex-direction: column; gap: 1rem; }
.field { display: flex; flex-direction: column; gap: 0.4rem; }
.field-label { font-size: var(--fs-xs); font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-3); padding-left: 0.2rem; }
.field-control {
  display: flex; align-items: center; gap: 0.6rem;
  padding: 0 0.6rem 0 1rem;
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--glass-border);
  transition: border-color 0.25s, box-shadow 0.25s, background 0.25s;
}
.field-control:focus-within {
  border-color: var(--accent);
  background: rgba(124, 139, 255, 0.06);
  box-shadow: 0 0 0 4px rgba(124, 139, 255, 0.18);
}
.field-ico { font-size: 1.1rem; opacity: 0.7; flex: none; }
.field-control input {
  flex: 1; min-height: 58px;
  background: none !important; border: 0 !important; box-shadow: none !important;
  padding: 0; font-size: var(--fs-lg);
}
.field-control input:focus-visible { box-shadow: none; }
.field-toggle { flex: none; background: none; border: 0; cursor: pointer; font-size: 1.15rem; padding: 0.4rem; border-radius: 10px; opacity: 0.75; }
.field-toggle:hover { opacity: 1; background: var(--glass-bg); }
.submit { min-height: 58px; margin-top: 0.3rem; font-size: var(--fs-lg); }

.msg { font-size: var(--fs-sm); padding: 0.6rem 0.9rem; border-radius: 12px; }
.msg.err { color: var(--bad); background: var(--bad-bg); }
.msg.ok { color: var(--ok); background: var(--ok-bg); }
.msg.warn { color: var(--warn); background: rgba(251,191,36,0.14); }
.switch { font-size: var(--fs-sm); text-align: center; margin-top: 0.2rem; }
.link { background: none; border: 0; color: var(--accent); font: inherit; font-weight: 700; cursor: pointer; }
.link:hover { text-decoration: underline; }
</style>
