import Header from "@/components/interface/header"
import Hero from "@/components/section/hero"
import Current from "@/components/section/current"
import Footer from "@/components/interface/footer"
import News from "@/components/section/news"
import Goto from "@/components/section/goto"


export default function Home() {
  return (
    <main className="text-black">
      <Header/>
      <Hero/>
      <Current/>
      <News/>
      <Goto/>
      <Footer/>
    </main>
  )
}
