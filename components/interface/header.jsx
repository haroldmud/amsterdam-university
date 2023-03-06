import { TfiSearch, TfiHeart } from "react-icons/tfi"
import { MdOutlineMenu } from "react-icons/md"
import Link from "next/link"
import Router, { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Header(){
  const links = [{title: 'Education', path:'/education'}, {title:'Research', path:'/research'}, {title:'News & Events', path:'/news'}, {title:'About the UvA', path:'/about'}, {title:'Library', path:'/library'}];
  const [isScroll, setIsScroll] = useState(false);
  // const [slide, setSlide] = useState(false)

  useEffect(()=>{
    function handleScroll(){
      if(window.scrollY > 100) {
        setIsScroll(true);
      } else {
        setIsScroll(false)
      }
    }
      window.addEventListener('scroll', handleScroll)
      return ()=>{
        window.addEventListener('scroll', handleScroll)
      }
  },[isScroll]);

  




  const router = useRouter();
  const currentRoute = router.pathname;

  return(
    <header>
      <section id="header" className="bg-white shadow-md">
        <div className={` lg:py-5 py-1  max-w-[80rem] mx-auto mb-8`}>
          <div className={`${isScroll ? "py-1" : "py-4"} my-auto flex justify-between px-2 fixed border bg-white w-full z-10  top-0`}>
            <Link href="/">
              <img className={`${isScroll ? "hidden" : "lg:block"} w-[24rem]  hidden`} src="/assets/icons/logo.png" alt="logo" />
              <img  className={`${isScroll ? "lg:block":  "lg:hidden"} lg:w-[2.5rem] w-[3.5rem]`} src="/assets/icons/logo-mob.jpg" alt="" />
            </Link>
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
      <section className="bg-grey shadow-md pt-3 lg:block hidden">
        <div className="max-w-[80rem] mx-auto flex gap-6 text-xl pl-2">
          {
            links.map((item,x) => 
              <Link key={x} href={`${item.path}`} className={`${item.path == currentRoute ? "border-red text-red" :""} hover:text-red border-b-2 border-grey hover:border-red pb-3`}>{item.title}</Link>
            )
          }
        </div>
      </section>
    </header>
  )
}