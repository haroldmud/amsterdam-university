import { TfiSearch, TfiHeart } from "react-icons/tfi"
import { MdOutlineMenu } from "react-icons/md"
import { TfiClose } from "react-icons/tfi"
import Link from "next/link"
import Router, { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Header(){
  const links = [{title: 'Education', path:'/education'}, {title:'Research', path:'/research'}, {title:'News & Events', path:'/news'}, {title:'About the UvA', path:'/about'}, {title:'Library', path:'/library'}];
  const [isScroll, setIsScroll] = useState(false);
  const [slide, setSlide] = useState(false);
  const [menu, setMenu] = useState(false)

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

  useEffect(()=>{
    function handleSlide(){
      if(scrollY > 500){
        setSlide(true)
      }else{
        setSlide(false)
      }
    }
    window.addEventListener('scroll', handleSlide);
    return ()=>{
      window.addEventListener('scroll', handleSlide)
    }
  },[slide])




  const router = useRouter();
  const currentRoute = router.pathname;

  return(
    <header className="bg-white fixed w-full top-0 z-10">
      <section id="header" className="shadow-md bg-white z-50">
        <div className={`${isScroll ?  "py-1" : "lg:py-5 py-2"}   max-w-[80rem] mx-auto `}>
          <div className={` my-auto flex justify-between px-2  w-full top-0`}>
            <Link  href="/">
              <img className={`${isScroll ? "hidden" : "lg:block"} w-[24rem]  hidden`} src="/assets/icons/logo.png" alt="logo" />
              <img  className={`${isScroll ? "lg:block":  "lg:hidden"} lg:w-[2.5rem] w-[3.5rem]`} src="/assets/icons/logo-mob.jpg" alt="" />
            </Link>
            <div className="lg:flex gap-8  hidden">
              <div className=" w-[22rem] h-[2.5rem] border rounded-sm flex justify-between">
                <input className="w-full pl-4 outline-none" type="text" placeholder="Search..."/>
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
              <span onClick={()=> setMenu(current => !current)}  className="text-2xl text-gray-500 bg-black p-2 rounded-sm my-auto">
                {
                 menu ? <TfiClose/> : <MdOutlineMenu/>
                  }
              </span>
            </div>
            <a href="https://amsterdam-university-clone.netlify.app/" className={`${menu ? 'block' : 'hidden'} w-full lg:hidden absolute top-[4.4rem] z-50`}>
              <img className="w-[100%] -ml-2 border" src="/assets/icons/menu.png" alt="" />
            </a>
          </div>
        </div>

      </section>
      {/* ${slide ? "bg-red" :"bg-grey"} */}
      <section className={`${slide ? "hidden" : "lg:block"} bg-grey shadow-md pt-3  hidden w-full`}>
        <div className={` max-w-[80rem] mx-auto flex gap-6 text-xl pl-2 `}>
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