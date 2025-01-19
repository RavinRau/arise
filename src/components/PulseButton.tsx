import React from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'

interface PulseButtonProps {
  onClick: () => void
  label: string
}

const PulseButton: React.FC<PulseButtonProps> = ({ onClick, label }) => {
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 2.5,
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  const borderVariants = {
    initial: {
      opacity: 0,
      scale: 1
    },
    pulse: {
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <div className="p-4">
      <motion.div variants={buttonVariants} className="relative">
        <motion.div
          className="absolute inset-0 rounded-lg bg-primary"
          variants={borderVariants}
          initial="initial"
          animate="pulse"
          style={{ filter: 'blur(2px)' }}
        />
        <Button size="lg" onClick={onClick} className="px-6 relative">
          {label}
        </Button>
      </motion.div>
    </div>
  )
}

export default PulseButton
