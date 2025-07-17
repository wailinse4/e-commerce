// Animation variants for consistent motion across components
export const slideIn = {
  hidden: { y: -30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 150,
      mass: 0.8,
      velocity: 0.5
    }
  },
  exit: { 
    y: -30, 
    opacity: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 150,
      mass: 0.8,
      velocity: 0.5
    }
  }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: { 
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}
