import Header from "@/components/interface/header"
import Hero from "@/components/section/hero"
import Current from "@/components/section/current"
import Footer from "@/components/interface/footer"
import News from "@/components/section/news"


export default function Home() {
  return (
    <main className="text-black">
      <Header/>
      <Hero/>
      <Current/>
      <News/>
      <section className="max-w-[80rem] mx-auto pt-12">
        <div>
          <h2 className="font-semibold text-3xl pl-2 mb-6">Go to:</h2>
          <div className="grid lg:grid-cols-3 gap-6 px-2">
            <div href="#" className="w-[25.125rem]  cursor-pointer pl-4 border  rounded-sm group hover:shadow-2xl py-3 pb-8">
              <p className="text-2xl w-fit h-fit -pb-2 border-b border-white group-hover:border-red group-hover:text-red">Alumni</p>
            </div>
            <div href="#" className="w-[25.125rem] cursor-pointer  pl-4 border  rounded-sm group hover:shadow-2xl py-3 pb-8">
              <p className="text-2xl w-fit h-fit -pb-2 border-b border-white group-hover:border-red group-hover:text-red">PhD</p>
            </div>
            <div href="#" className="w-[25.125rem] cursor-pointer  pl-4 border  rounded-sm group hover:shadow-2xl py-3 pb-8">
              <p className="text-2xl w-fit h-fit -pb-2 border-b border-white group-hover:border-red group-hover:text-red">Working at UvA</p>
            </div>
            <div href="#" className="w-[25.125rem] cursor-pointer  pl-4 border  rounded-sm group hover:shadow-2xl py-3 pb-8">
              <p className="text-2xl w-fit h-fit -pb-2 border-b border-white group-hover:border-red group-hover:text-red">UvA exprts</p>
            </div>
            <div href="#" className="w-[25.125rem] cursor-pointer  pl-4 border  rounded-sm group hover:shadow-2xl py-3 pb-8">
              <p className="text-2xl w-fit h-fit -pb-2 border-b border-white group-hover:border-red group-hover:text-red">Staff website</p>
            </div>
            <div href="#" className="w-[25.125rem] pl-4 border  rounded-sm group hover:shadow-2xl py-3 pb-8">
              <p className="text-2xl w-fit h-fit -pb-2 border-b border-white group-hover:border-red group-hover:text-red">Student website</p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  )
}
