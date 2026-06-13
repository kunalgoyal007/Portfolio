// Shared Framer Motion variants for consistent entrance animations.

export const EASE = [0.22, 1, 0.36, 1]

// Fade + rise, used for most single elements.
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
}

// Container that staggers its children in.
export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

// Shared viewport config so reveals trigger once, a little before fully in view.
export const viewportOnce = { once: true, margin: '0px 0px -80px 0px' }
