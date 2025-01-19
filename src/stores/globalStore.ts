import { makeAutoObservable } from 'mobx'

class GlobalStore {
  startDay = false

  constructor() {
    makeAutoObservable(this)
  }

  onClickStart = async () => {
    this.startDay = true
  }
}

export const globalStore = new GlobalStore()
