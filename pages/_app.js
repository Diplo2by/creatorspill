import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'

const mont = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={mont.className}>
      <Component {...pageProps} />
    </main>
  )
}
