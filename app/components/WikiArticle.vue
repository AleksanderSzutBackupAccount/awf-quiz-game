<script setup lang="ts">
import type { WikiBlock } from '~/content/types'

defineProps<{ blocks: WikiBlock[] }>()

// slugify heading for anchor ids (used by TOC)
function slug(s: string) {
  return s
    .toLowerCase()
    .replace(/[ąćęłńóśźż]/g, (c) => ({ ą: 'a', ć: 'c', ę: 'e', ł: 'l', ń: 'n', ó: 'o', ś: 's', ź: 'z', ż: 'z' }[c] || c))
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}
defineExpose({ slug })
</script>

<template>
  <article class="article">
    <section
      v-for="(b, i) in blocks"
      :key="i"
      class="block"
      :class="{ 'has-head': b.heading }"
    >
      <h2 v-if="b.heading" :id="slug(b.heading)" class="block-head">
        {{ b.heading }}
      </h2>
      <p v-if="b.body" class="block-body">{{ b.body }}</p>
      <ul v-if="b.bullets?.length" class="block-list">
        <li v-for="(li, j) in b.bullets" :key="j">{{ li }}</li>
      </ul>
    </section>
  </article>
</template>

<style scoped>
.article { display: flex; flex-direction: column; gap: var(--sp-4); }
.block-head {
  font-size: var(--fs-lg);
  scroll-margin-top: calc(var(--header-h) + 1rem);
  display: flex; align-items: center; gap: 0.6rem;
}
.block-head::before {
  content: ''; width: 6px; height: 1.1em; border-radius: 4px;
  background: linear-gradient(var(--aurora-2), var(--aurora-1));
}
.block-body { color: var(--text-2); margin-top: 0.4rem; }
.block-list { margin-top: 0.6rem; display: flex; flex-direction: column; gap: 0.5rem; padding-left: 0; list-style: none; }
.block-list li {
  position: relative; padding-left: 1.5rem; color: var(--text-2);
}
.block-list li::before {
  content: ''; position: absolute; left: 0; top: 0.62em;
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--accent); box-shadow: 0 0 10px var(--accent);
}
</style>
