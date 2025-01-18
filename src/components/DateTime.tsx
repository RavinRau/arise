import { format } from 'date-fns'
import { useEffect, useState } from 'react'

const DateTime: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-center mb-2">
      <div className="text-white/80">
        <p className="text-lg">{format(currentTime, 'EEEE, MMMM do, yyyy')}</p>
        <p className="text-md">{format(currentTime, 'h:mm:ss aa')}</p>
      </div>
    </div>
  )
}

export default DateTime 