import { useEffect, useState } from 'react'
import DateTime from './DateTime'

const DayGreeting: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const getGreeting = () => {
    const hour = currentTime.getHours()
    if (hour >= 5 && hour < 12) return 'Good Morning'
    if (hour >= 12 && hour < 17) return 'Good Afternoon'
    return 'Good Evening'
  }

  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-white mb-2">
        {getGreeting()}, Champion
      </h1>
      <DateTime />
    </div>
  )
}

export default DayGreeting
