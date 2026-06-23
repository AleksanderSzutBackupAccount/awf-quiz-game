import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger)

  // Mark that JS is active so reveal elements can start hidden (no FOUC for no-JS).
  if (import.meta.client) {
    document.documentElement.classList.add('js')
  }

  const prefersReduced =
    import.meta.client &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return {
    provide: {
      gsap,
      ScrollTrigger,
      motionOk: !prefersReduced,
    },
  }
})
