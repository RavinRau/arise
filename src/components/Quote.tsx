import React from 'react'

interface QuoteProps {
  quote: string
  author: string
  loading?: boolean
}

const Quote: React.FC<QuoteProps> = ({ quote, author }) => {
  return (
    <div className="w-[40rem] p-4">
      <p className="text-2xl italic font-medium">{quote}</p>
      <p className="flex items-center justify-end mt-2 pe-2 text-sm font-medium">
        by {author}
      </p>
    </div>
  )
}

export default Quote
