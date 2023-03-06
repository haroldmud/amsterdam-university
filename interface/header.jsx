import { TfiSearch, TfiHeart } from "react-icons/tfi"
import { MdOutlineMenu } from "react-icons/md"

export default function Header(){
  return(
    <header>
      <section className="bg-white shadow-md">
        <div className="lg:py-5 py-1  max-w-[80rem] mx-auto">
          <div className="my-auto flex justify-between px-2">
            <div>
              <img className="w-[24rem] lg:block hidden" src="/assets/icons/logo.png" alt="logo" />
              <img  className="lg:hidden block w-[3.5rem]" src="/assets/icons/logo-mob.jpg" alt="" />
            </div>
            <div className="lg:flex gap-8  hidden">
              <div className=" w-[22rem] h-[2.5rem] border rounded-sm flex justify-between">
                <input className="w-full pl-4" type="text" placeholder="Search..."/>
                <div className="border-r my-2"></div>
                <span className="my-auto px-4 text-2xl"><TfiSearch/></span>
              </div>
              <div className="flex gap-2 my-auto">
                <h2 className="font-semibold">Compare programmes</h2>
                <span className="text-2xl"><TfiHeart/></span>
              </div>
              <div className="h-fit my-auto w-fit p-2 font-bold border border-black rounded-sm">
                <p>NL</p>
              </div>
            </div>
            <div className="lg:hidden flex gap-4 pr-3">
              <span className="text-4xl my-auto text-gray-500"><TfiHeart/></span>
              <span className="my-auto border-gray-500 text-gray-500 text-2xl border w-fit p-2"><TfiSearch/></span>
              <div className="h-fit my-auto w-fit p-2 font-bold border border-gray-500 rounded-sm">
                <p className="text-gray-500">NL</p>
              </div>
              <span className="text-2xl text-gray-500 bg-black p-2 rounded-sm my-auto"><MdOutlineMenu/></span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-grey shadow-md pt-3">
        <div className="max-w-[80rem] mx-auto flex gap-6 text-xl pl-2">
          {
            ['Education', 'Research', 'News & Events', 'About the Uva', 'Library'].map((item,x) => 
              <a key={x} href="#" className="hover:text-red-800 border-b-2 border-grey hover:border-red-800 pb-3">{item}</a>
            )
          }
        </div>
      </section>
    </header>
  )
}