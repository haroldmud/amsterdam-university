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
      <section className="md:block hidden fixed right-0 top-[18rem]">
        <img className="w-10" src="/assets/icons/feedback.png" alt="" />
      </section>
      <News/>
      <Goto/>
      <Footer/>
    </main>
  )
}
