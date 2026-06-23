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
  </div>
</template>

<style scoped>
.layout { display: flex; flex-direction: column; min-height: 100dvh; }
.main { flex: 1; }
.ftr { padding: var(--sp-5) 0 var(--sp-4); margin-top: var(--sp-6); border-top: 1px solid var(--glass-border); }
.ftr-inner { display: flex; flex-wrap: wrap; gap: 0.5rem 1.5rem; justify-content: space-between; font-size: var(--fs-xs); }
</style>
