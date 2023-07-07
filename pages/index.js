import Head from "next/head"
import About from "./components/About"
import Coming from "./components/Coming"
import Hero from "./components/Hero"
import Work from "./components/Work"
import Footer from "./components/Footer"
import MoreDetails from "./components/MoreDetails"

export default function Home() {
  return (
    <>
      <Head>
        <title>LvL up | Creators, Brands & More. </title>
        <link rel='icon' href='/icons/favicon.ico' />
      </Head>
      <div className="h-screen snap-mandatory snap-y scroll-smooth overflow-y-auto text-white bg-[url('/images/bg.jpeg')] no-scrollbar max-sm:overflow-x-hidden">
        <Hero />
        <About />
        <Work />
        {/* <Coming/> */}
        <MoreDetails />
        <Footer />
      </div>
    </>
  )
}
