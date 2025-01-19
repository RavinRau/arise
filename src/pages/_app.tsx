import { useEffect } from 'react'
import '../styles/globals.css'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
