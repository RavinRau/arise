import { makeAutoObservable } from 'mobx'

class QuoteStore {
  quote = ''
  author = ''
  loading = false
  error = null

  constructor() {
    makeAutoObservable(this)
  }

  fetchQuotes = async () => {
    this.loading = true
    this.error = null
    try {
      const response = await fetch('https://quotes-api-self.vercel.app/quote')
      const data = await response.json()
      this.quote = data.quote
      this.author = data.author
    } catch (error: any) {
      this.error = error.message
    } finally {
      this.loading = false
    }
  }
}

export const quoteStore = new QuoteStore()
