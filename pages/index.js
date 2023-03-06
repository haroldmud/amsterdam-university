import Header from "@/components/interface/header"
import Hero from "@/components/section/hero"
import Current from "@/components/section/current"
import Footer from "@/components/interface/footer"


export default function Home() {
  return (
    <main className="text-black">
      <Header/>
      <Hero/>
      <Current/>
     
      <Footer/>
    </main>
  )
}
