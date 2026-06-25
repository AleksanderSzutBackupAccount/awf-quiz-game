<script setup lang="ts">
import { getDeviceId } from '~/composables/useDeviceId'

definePageMeta({ layout: false })

const supabase = useSupabaseClient()
const user = useSupabaseUser()
const router = useRouter()

const email = computed(() => user.value?.email ?? '')
const checking = ref(false)
const stillPending = ref(false)
const copied = ref('')

async function recheck() {
  checking.value = true
  stillPending.value = false
  const { data: s } = await supabase.auth.getSession()
  const uid = s.session?.user?.id
  if (uid) {
    const { data } = await supabase
      .from('profiles')
      .select('approved')
      .eq('user_id', uid)
      .maybeSingle()
    if (data?.approved) {
      await router.replace('/')
      return
    }
  }
  stillPending.value = true
  checking.value = false
}

async function copy(text: string, what: string) {
  try {
    await navigator.clipboard.writeText(text)
    copied.value = what
    setTimeout(() => (copied.value = ''), 1500)
  } catch {
    /* clipboard unavailable */
  }
}

async function logout() {
  try {
    await supabase.rpc('unregister_device', { p_device_id: getDeviceId() })
  } catch {
    /* ignore */
  }
  await supabase.auth.signOut()
  await router.replace('/login')
}
</script>

<template>
  <div class="pending-wrap">
    <div class="app-bg" aria-hidden="true" />
    <GlassCard strong class="pending-card">
      <div class="badge" aria-hidden="true">⏳</div>
      <h1>Konto czeka na aktywację</h1>
      <p class="muted lead">
        Twoje konto zostało utworzone, ale nie ma jeszcze dostępu do bazy wiedzy i quizów.
        Dostęp nadawany jest ręcznie.
      </p>

      <div class="how glass">
        <p class="how-title">Jak uzyskać dostęp?</p>
        <p class="muted">
          Napisz do nas, podając <strong>swój adres e-mail</strong> użyty przy rejestracji.
          Pozostałe kroki przekażemy po kontakcie.
        </p>

        <div class="contacts">
          <button class="contact" @click="copy('contact@szut.software', 'email')">
            <span class="c-ico" aria-hidden="true">✉</span>
            <span class="c-body">
              <span class="c-label">E-mail</span>
              <span class="c-val">contact@szut.software</span>
            </span>
            <span class="c-copy">{{ copied === 'email' ? 'skopiowano ✓' : 'kopiuj' }}</span>
          </button>

          <button class="contact" @click="copy('793448398', 'sms')">
            <span class="c-ico" aria-hidden="true">💬</span>
            <span class="c-body">
              <span class="c-label">SMS</span>
              <span class="c-val">793 448 398</span>
            </span>
            <span class="c-copy">{{ copied === 'sms' ? 'skopiowano ✓' : 'kopiuj' }}</span>
          </button>
        </div>
      </div>

      <div v-if="email" class="your-email">
        <span class="dim">Twój adres do podania:</span>
        <button class="email-chip" @click="copy(email, 'mine')">
          {{ email }} <span class="dim">{{ copied === 'mine' ? '✓' : '⧉' }}</span>
        </button>
      </div>

      <p v-if="stillPending" class="msg">
        Konto wciąż oczekuje na aktywację. Spróbuj ponownie później.
      </p>

      <div class="actions">
        <button class="btn btn-primary" :disabled="checking" @click="recheck">
          {{ checking ? 'Sprawdzam…' : '↻ Sprawdź dostęp' }}
        </button>
        <button class="btn btn-ghost" @click="logout">Wyloguj</button>
      </div>
    </GlassCard>
  </div>
</template>

<style scoped>
.pending-wrap { min-height: 100dvh; display: grid; place-items: center; padding: 1.5rem; }
.pending-card { width: 100%; max-width: 520px; display: flex; flex-direction: column; gap: 1rem; padding: clamp(1.5rem, 4vw, 2.4rem); text-align: center; }
.badge { width: 72px; height: 72px; margin: 0 auto; border-radius: 20px; display: grid; place-items: center; font-size: 2.2rem; background: linear-gradient(135deg, var(--aurora-1), var(--aurora-3)); box-shadow: 0 14px 34px -10px var(--accent-strong); }
h1 { font-size: var(--fs-xl); }
.lead { font-size: var(--fs-sm); }

.how { text-align: left; padding: 1.1rem 1.2rem; border-radius: var(--radius); display: flex; flex-direction: column; gap: 0.6rem; }
.how-title { font-weight: 700; }
.contacts { display: flex; flex-direction: column; gap: 0.6rem; margin-top: 0.3rem; }
.contact { display: flex; align-items: center; gap: 0.8rem; padding: 0.8rem 0.9rem; border-radius: var(--radius); background: var(--glass-bg); border: 1px solid var(--glass-border); color: var(--text-1); font: inherit; cursor: pointer; text-align: left; transition: 0.2s; }
.contact:hover { border-color: var(--accent); transform: translateY(-1px); }
.c-ico { font-size: 1.4rem; flex: none; }
.c-body { display: flex; flex-direction: column; flex: 1; }
.c-label { font-size: var(--fs-xs); text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-3); font-weight: 700; }
.c-val { font-weight: 700; font-size: var(--fs-base); }
.c-copy { font-size: var(--fs-xs); color: var(--accent); font-weight: 700; flex: none; }

.your-email { display: flex; flex-direction: column; gap: 0.3rem; align-items: center; font-size: var(--fs-sm); }
.email-chip { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: var(--radius-full); padding: 0.45rem 1rem; color: var(--text-1); font: inherit; font-weight: 600; cursor: pointer; }
.email-chip:hover { border-color: var(--accent); }

.msg { font-size: var(--fs-sm); color: var(--warn); background: rgba(251,191,36,0.14); padding: 0.6rem 0.9rem; border-radius: 12px; }
.actions { display: flex; gap: 0.6rem; justify-content: center; flex-wrap: wrap; margin-top: 0.2rem; }
</style>
