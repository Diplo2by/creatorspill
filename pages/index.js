import About from "./components/About"
import Hero from "./components/Hero"
import Work from "./components/Work"
import Navbar from "./components/Navbar"
import Contact from "./components/Contact"
import { styled } from "styled-components"


export default function Home() {
  return (
    <div className="h-screen snap-mandatory snap-y scroll-smooth overflow-y-auto text-white bg-[url('/images/bg.jpeg')]">
      <Hero />
      <About />
      <Work />
    </div>
  )
}
