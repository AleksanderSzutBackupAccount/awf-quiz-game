<script setup lang="ts">
const props = withDefaults(
  defineProps<{ to: number; duration?: number; suffix?: string; prefix?: string }>(),
  { duration: 1.2, suffix: '', prefix: '' }
)
const { $gsap, $motionOk } = useNuxtApp()
const display = ref(0)

onMounted(() => {
  if (!$gsap || !$motionOk) {
    display.value = props.to
    return
  }
  const obj = { v: 0 }
  $gsap.to(obj, {
    v: props.to,
    duration: props.duration,
    ease: 'power2.out',
    onUpdate: () => (display.value = Math.round(obj.v)),
  })
})
</script>

<template>
  <span>{{ prefix }}{{ display }}{{ suffix }}</span>
</template>
