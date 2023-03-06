import Header from "@/components/interface/header"
import Hero from "@/components/section/hero"
import Current from "@/components/section/current"
import { SlArrowUp } from 'react-icons/sl'
import { SlArrowRight } from 'react-icons/sl'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'


export default function Home() {
  return (
    <main className="text-black">
      <Header/>
      <Hero/>
      <Current/>
      
    </main>
  )
}
