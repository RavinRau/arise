import DayGreeting from '@/components/DayGreeting'
import PulseButton from '@/components/PulseButton'
import { globalStore } from '@/stores/globalStore'
import { observer } from 'mobx-react'
import { Flame } from 'lucide-react'

export const StartYourDay: React.FC = observer(() => {
  return (
    <div className="flex items-center justify-center flex-col">
      <Flame className="text-orange-500 w-[4rem] h-[4rem] mb-4" />
      <DayGreeting/>
      <div></div>
      <PulseButton
        onClick={() => globalStore.onClickStart()}
        label="Let's Start The Day"
      />
    </div>
  )
})
