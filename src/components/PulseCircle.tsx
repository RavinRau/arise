import { motion, useAnimationControls } from 'framer-motion'
import { useEffect, useState, useCallback, useRef } from 'react'

interface PulseCircleProps {
  initialCount: number
  onComplete?: () => void
}

const PulseCircle: React.FC<PulseCircleProps> = ({
  initialCount = 3,
  onComplete
}) => {
  const [count, setCount] = useState(initialCount)
  const controls = useAnimationControls()
  const [breathText, setBreathText] = useState('Breath In')
  const isMounted = useRef(true)

  const animate = useCallback(async () => {
    if (!isMounted.current) return

    try {
      // Breath In phase
      setBreathText('Breath In')
      await controls.start({
        scale: 1.5,
        opacity: 0.7,
        transition: { duration: 2, ease: 'easeInOut' }
      })

      if (!isMounted.current) return

      // Breath Out phase
      setBreathText('Breath Out')
      await controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 2, ease: 'easeInOut' }
      })

      if (!isMounted.current) return

      const newCount = count - 1
      setCount(newCount)

      if (newCount === 0 && onComplete) {
        onComplete()
      }
    } catch (error) {
      console.error('Animation error:', error)
      // Reset to initial state if there's an error
      if (isMounted.current) {
        controls.set({ scale: 1, opacity: 1 })
        setBreathText('Breath In')
      }
    }
  }, [controls, count, onComplete])

  useEffect(() => {
    isMounted.current = true
    let animationFrame: number

    const runAnimation = async () => {
      if (count > 0 && isMounted.current) {
        await animate()
        if (isMounted.current && count > 0) {
          animationFrame = requestAnimationFrame(runAnimation)
        }
      }
    }

    runAnimation()

    return () => {
      isMounted.current = false
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
      controls.stop()
    }
  }, [count, animate, controls])

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center relative">
        <motion.div
          className="w-32 h-32 bg-orange-500 rounded-full flex items-center justify-center"
          initial={{ scale: 1, opacity: 1 }}
          animate={controls}
        />
        <span className="absolute text-white text-2xl">{count}</span>
      </div>
      <motion.div
        key={breathText}
        className="mt-12 text-xl text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {breathText}
      </motion.div>
    </div>
  )
}

export default PulseCircle
