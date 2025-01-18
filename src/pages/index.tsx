import React, { use, useEffect } from 'react'
import { observer } from 'mobx-react'
import Quote from '@/components/Quote'
import { quoteStore } from '@/stores/qouteStore'

const Home: React.FC = observer(() => {
  useEffect(() => {
    quoteStore.fetchQuotes()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4">
        <Quote quote={quoteStore.quote} author={quoteStore.author} />
      </div>
    </div>
  )
})

export default Home
