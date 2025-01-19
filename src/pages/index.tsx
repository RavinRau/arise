import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { quoteStore } from '@/stores/qouteStore'
import PulseCircle from '@/components/PulseCircle'
import { globalStore } from '@/stores/globalStore'
import { StartYourDay } from '@/screen/StartYourDay'
import { PriorityForTheDay } from '@/screen/PriorityForTheDay'
import DayGreeting from '@/components/DayGreeting'

const Home: React.FC = observer(() => {
  const [showPriority, setShowPriority] = useState(false)

  useEffect(() => {
    quoteStore.fetchQuotes()
  }, [])

  const handleComplete = () => {
    setShowPriority(true)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {globalStore.startDay ? (
        showPriority ? (
          <PriorityForTheDay />
        ) : (
          <PulseCircle initialCount={3} onComplete={handleComplete} />
        )
      ) : (
        <StartYourDay />
      )}
    </div>
  )
})

export default Home
