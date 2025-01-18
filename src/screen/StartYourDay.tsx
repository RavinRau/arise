import DayGreeting from '@/components/DayGreeting'
import PulseButton from '@/components/PulseButton'
import { globalStore } from '@/stores/globalStore'
import { observer } from 'mobx-react'

export const StartYourDay: React.FC = observer(() => {
  return (
    <div className="flex items-center justify-center flex-col">
      <DayGreeting/>
      <PulseButton
        onClick={() => globalStore.onClickStart()}
        label="Let's Start The Day"
      />
    </div>
  )
})
