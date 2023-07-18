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
        <link rel='icon' href='/favicon.ico' />
        <meta property="og:url" content="https://www.lvlupcreators.com/" />
        <meta name="description" content="Creators, Brands and More." key="desc" />
        <meta name="robots" content="max-snippet:84" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lvl Up Creators" />
        <meta property="og:image" content="https://www.lvlupcreators.com/images/preview.jpg" />
        <meta property="og:description" content="Creators, Brands and More." />
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
