import Header from "@/components/interface/header"
import Hero from "@/components/section/hero"

export default function Home() {
  return (
    <main className="text-black">
      <Header/>
      <Hero/>
      <section className="max-w-[80rem] mx-auto lg:mt-20 mt-[23rem]">
        <div>
          <h2 className="text-2xl font-semibold pl-2 my-8">Current</h2>
          <div className="flex lg:flex-row flex-col gap-4 justify-between lg:px-2">
            <div className="w-[25.125rem] group cursor-pointer hover:shadow-2xl lg:px-0 px-2">
              <img className="w-full h-[10.5rem] object-cover" src="/assets/images/current1.jpeg" alt="" />
              <div className="w-full p-2 border">
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-red">Study in Amsterdam Week 20-24 February</h2>
                <p>Discover everything an international student needs to know about studying  at the UvA.</p>
              </div>
            </div>
            <div className="w-[25.125rem] group cursor-pointer hover:shadow-2xl lg:px-0 px-2">
              <img className="w-full h-[10.5rem] object-cover" src="/assets/images/current2.webp" alt="" />
              <div className="w-full p-2 border">
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-red">Study in Amsterdam Week 20-24 February</h2>
                <p>Discover everything an international student needs to know about studying  at the UvA.</p>
              </div>
            </div>
            <div className="w-[25.125rem] group cursor-pointer hover:shadow-2xl lg:px-0 px-2">
              <img className="w-full h-[10.5rem] object-cover" src="/assets/images/current3.webp" alt="" />
              <div className="w-full p-2 border">
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-red">Study in Amsterdam Week 20-24 February</h2>
                <p>Discover everything an international student needs to know about studying  at the UvA.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
