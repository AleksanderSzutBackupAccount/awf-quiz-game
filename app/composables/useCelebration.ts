/**
 * Dopamine-friendly confetti burst powered by GSAP.
 * Spawns particles in a fixed overlay, animates them, then cleans up.
 * No-ops when the user prefers reduced motion.
 */
export function useCelebration() {
  const { $gsap, $motionOk } = useNuxtApp()

  const COLORS = ['#6d5efc', '#2bd2ff', '#ff6ad5', '#4ade80', '#fbbf24', '#ffffff']

  function confetti(opts: { count?: number; originX?: number; originY?: number; power?: number } = {}) {
    if (!import.meta.client || !$gsap || !$motionOk) return

    const count = opts.count ?? 120
    const originX = opts.originX ?? window.innerWidth / 2
    const originY = opts.originY ?? window.innerHeight * 0.35
    const power = opts.power ?? 1

    const layer = document.createElement('div')
    layer.setAttribute('aria-hidden', 'true')
    layer.style.cssText =
      'position:fixed;inset:0;pointer-events:none;z-index:9999;overflow:hidden;'
    document.body.appendChild(layer)

    const pieces: HTMLElement[] = []
    for (let i = 0; i < count; i++) {
      const p = document.createElement('span')
      const size = 6 + Math.random() * 8
      const round = Math.random() > 0.5
      p.style.cssText = `position:absolute;left:${originX}px;top:${originY}px;width:${size}px;height:${
        size * (round ? 1 : 1.6)
      }px;background:${COLORS[i % COLORS.length]};border-radius:${
        round ? '50%' : '2px'
      };will-change:transform,opacity;`
      layer.appendChild(p)
      pieces.push(p)
    }

    const tl = $gsap.timeline({ onComplete: () => layer.remove() })
    pieces.forEach((p) => {
      const angle = Math.random() * Math.PI * 2
      const velocity = (120 + Math.random() * 380) * power
      const dx = Math.cos(angle) * velocity
      const dy = Math.sin(angle) * velocity - 120 * power // bias upward
      const dur = 0.9 + Math.random() * 0.9
      tl.fromTo(
        p,
        { x: 0, y: 0, opacity: 1, rotate: 0, scale: 1 },
        {
          x: dx,
          y: dy + 420, // gravity pull down
          rotate: (Math.random() - 0.5) * 720,
          opacity: 0,
          scale: 0.6 + Math.random() * 0.8,
          duration: dur,
          ease: 'power2.out',
        },
        0
      )
    })
  }

  return { confetti }
}
