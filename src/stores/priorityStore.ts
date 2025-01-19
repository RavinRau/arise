import { makeAutoObservable } from 'mobx'

interface Priority {
  id: string
  text: string
}

class PriorityStore {
  priorities: Priority[] = []

  constructor() {
    makeAutoObservable(this)
  }

  addPriority = (text: string) => {
    if (this.priorities.length < 3) {
      this.priorities.push({
        id: Math.random().toString(36).substring(7),
        text
      })
    }
  }

  removePriority = (id: string) => {
    this.priorities = this.priorities.filter((priority) => priority.id !== id)
  }

  reorderPriorities = (newOrder: Priority[]) => {
    this.priorities = newOrder
  }

  get canAddMore() {
    return this.priorities.length < 3
  }
}

export const priorityStore = new PriorityStore()
