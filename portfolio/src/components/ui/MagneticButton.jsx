import { useRef } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"

export default function MagneticButton({ children, href, className = "", ...props }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-50, 50], [10, -10])
  const rotateY = useTransform(x, [-50, 50], [-10, 10])

  function handleMouse(e) {
    const rect = ref.current.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    x.set(dx * 0.2)
    y.set(dy * 0.2)
  }
  function reset() {
    x.set(0)
    y.set(0)
  }

  // If href is passed → render <motion.a>, else <motion.button>
  const MotionTag = href ? motion.a : motion.button

  return (
    <MotionTag
      ref={ref}
      href={href}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x, y, rotateX, rotateY }}
      className={`inline-flex items-center gap-2 rounded-2xl px-6 py-3 shadow-glass will-change-transform ${className}`}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
