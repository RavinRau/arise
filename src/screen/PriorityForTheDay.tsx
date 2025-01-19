import DateTime from '@/components/DateTime'
import Quote from '@/components/Quote'
import { Input } from '@/components/ui/input'
import { quoteStore } from '@/stores/qouteStore'
import { priorityStore } from '@/stores/priorityStore'
import { observer } from 'mobx-react'
import { X, CornerDownLeft, GripVertical } from 'lucide-react'
import { KeyboardEvent, useState } from 'react'
import { Reorder } from 'framer-motion'

export const PriorityForTheDay: React.FC = observer(() => {
  const [priorityText, setPriorityText] = useState('')

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && priorityText.trim()) {
      priorityStore.addPriority(priorityText.trim())
      setPriorityText('')
    }
  }

  return (
    <div className="flex items-center justify-center flex-col">
      <DateTime />
      <div className="w-full max-w-md p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-200">
          Today's Priorities
        </h2>
        <p className="text-gray-400 italic text-sm mb-4">
          Choose three key priorities to focus on today. You can drag to reorder
          them based on importance.
        </p>

        <div className="w-full h-[15rem] px-4">
          {priorityStore.canAddMore && (
            <div className="relative mb-8">
              <Input
                value={priorityText}
                onChange={(e) => setPriorityText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="What's your focus for today?"
                className="bg-gray-800/50 border-gray-700 text-gray-200 
                placeholder:text-gray-500 pr-24"
                maxLength={100}
              />
              <div className="absolute right-3 top-1.5 flex items-center gap-2 text-gray-500">
                <CornerDownLeft size={16} />
                <span className="text-sm">Enter</span>
              </div>
              <p className="text-sm text-gray-500 ml-1 mt-1">
                Press Enter to add your priority
              </p>
            </div>
          )}
          <Reorder.Group
            axis="y"
            values={priorityStore.priorities}
            onReorder={priorityStore.reorderPriorities}
            className="space-y-3"
          >
            {priorityStore.priorities.map((priority) => (
              <Reorder.Item
                key={priority.id}
                value={priority}
                className="flex items-center justify-between p-4 bg-gray-800 rounded-lg 
                border border-gray-700 shadow-lg hover:border-gray-600 transition-colors
                cursor-grab active:cursor-grabbing"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="flex-shrink-0">
                    <GripVertical size={16} className="text-gray-500" />
                  </div>
                  <span className="text-gray-200 break-words">
                    {priority.text}
                  </span>
                </div>
                <button
                  onClick={() => priorityStore.removePriority(priority.id)}
                  className="p-1.5 hover:bg-gray-700 rounded-full transition-colors flex-shrink-0"
                  aria-label="Remove priority"
                >
                  <X size={16} className="text-gray-400 hover:text-gray-200" />
                </button>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </div>
      </div>
      <div className="w-full px-4">
        <div className="h-px bg-gray-800 my-8" />
      </div>
      <div className="p-2">
        <Quote quote={quoteStore.quote} author={quoteStore.author} />
      </div>
    </div>
  )
})
