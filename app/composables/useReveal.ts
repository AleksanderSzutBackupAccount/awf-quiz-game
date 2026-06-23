/**
 * Scroll-reveal helper built on GSAP ScrollTrigger.
 * Reveals elements carrying the `.reveal` class within `scope`.
 * No-ops gracefully when motion is reduced (elements are shown via CSS).
 */
export function useReveal() {
  const { $gsap, $ScrollTrigger, $motionOk } = useNuxtApp()

  const reveal = (scope?: HTMLElement | null, opts: { stagger?: number; y?: number } = {}) => {
    if (!import.meta.client || !$gsap) return
    const root = scope ?? document.body
    // Only process elements not yet revealed (idempotent across re-renders).
    const items = Array.from(
      root.querySelectorAll<HTMLElement>('.reveal:not([data-revealed])')
    )
    if (!items.length) return
    items.forEach((el) => el.setAttribute('data-revealed', ''))

    if (!$motionOk) {
      $gsap.set(items, { opacity: 1, y: 0 })
      return
    }

    items.forEach((el) => {
      const delay = Number(el.dataset.revealDelay ?? 0)
      $gsap.fromTo(
        el,
        { opacity: 0, y: opts.y ?? 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
    $ScrollTrigger?.refresh()
  }

  return { reveal }
}
