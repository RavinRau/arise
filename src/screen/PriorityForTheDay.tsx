import DateTime from '@/components/DateTime'
import Quote from '@/components/Quote'
import { quoteStore } from '@/stores/qouteStore'
import { observer } from 'mobx-react'

export const PriorityForTheDay: React.FC = observer(() => {
  return (
    <div className="flex items-center justify-center flex-col">
      <DateTime/>
      <div className="p-2">
        <Quote quote={quoteStore.quote} author={quoteStore.author} />
      </div>
    </div>
  )
})
