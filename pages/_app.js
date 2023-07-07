import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'


const mont = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={mont.className}>
      <Component {...pageProps} />
      <Analytics/>
    </main>
  )
}
