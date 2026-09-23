import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedCharProps {
  char: string
  progress: MotionValue<number>
  start: number
  end: number
}

function AnimatedChar({ char, progress, start, end }: AnimatedCharProps) {
  const opacity = useTransform(progress, [start, end], [0.2, 1])
  return <motion.span style={{ opacity }}>{char === ' ' ? '\u00A0' : char}</motion.span>
}

interface AnimatedTextProps {
  text: string
  className?: string
}

/** 逐字符滚动驱动透明度：字符 opacity 0.2 → 1，scroll offset ['start 0.8','end 0.2'] */
export default function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })
  const chars = text.split('')

  return (
    <p ref={ref} className={`relative ${className ?? ''}`}>
      {chars.map((char, i) => (
        <AnimatedChar
          key={`${i}-${char}`}
          char={char}
          progress={scrollYProgress}
          start={i / chars.length}
          end={(i + 1) / chars.length}
        />
      ))}
    </p>
  )
}
