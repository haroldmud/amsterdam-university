import { SlArrowUp } from 'react-icons/sl'
import { SlArrowDown } from 'react-icons/sl'
import { SlArrowRight } from 'react-icons/sl'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { useState } from 'react'


export default function Footer(){
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  return (
    <section className="bg-dark mt-20">
      <section className="max-w-[80rem] text-white mx-auto w-full">
        <div className="flex justify-between px-2 pt-6">
          <img className="lg:w-3/12 w-10/12" src="/assets/icons/white-logo.png" alt="logo" />
          <a href="#header" className="w-fit h-fit p-3 bg-gray-400 hover:bg-grey hover:text-dark rounded-sm"><SlArrowUp/></a>
        </div>
        <div className="flex lg:flex-row flex-col  pl-2 lg:gap-32 gap-6 mt-12">
          <div className="flex-col flex gap-2 lg:border-none border-b border-gray-400 mr-2">
            <h2 className="font-bold pb-3 lg:block hidden lg:my-0 my-auto ">Education & research</h2>
            <div onClick={()=> setIsOpen(current => !current)} className='lg:hidden flex  justify-between lg:border-none border-t  border-gray-400 py-4'>
              <h2 className="font-bold mb-2 lg:my-0 my-auto">Education & research</h2>
              <span className='lg:hidden my-auto text-[0.7rem] pr-4'>
                { isOpen ? <SlArrowUp/> :<SlArrowDown/>}</span>
            </div>
            <div className={`${isOpen ? "block pb-3" : "hidden"}`}>
              <span className="flex gap-1 text-[0.8rem] font-semibold"><span className="text-[0.5rem] my-auto "><SlArrowRight/></span> Bachelor's programmes</span>
              <span className="flex gap-1 text-[0.8rem] font-semibold"><span className="text-[0.5rem] my-auto "><SlArrowRight/></span> Minors</span>
              <span className="flex gap-1 text-[0.8rem] font-semibold"><span className="text-[0.5rem] my-auto "><SlArrowRight/></span> Master's programmes</span>
              <span className="flex gap-1 text-[0.8rem] font-semibold"><span className="text-[0.5rem] my-auto "><SlArrowRight/></span> Professional development</span>
              <span className="flex gap-1 text-[0.8rem] font-semibold"><span className="text-[0.5rem] my-auto "><SlArrowRight/></span> Exchange</span>
              <span className="flex gap-1 text-[0.8rem] font-semibold"><span className="text-[0.5rem] my-auto "><SlArrowRight/></span> Summer School</span>
              <span className="flex gap-1 text-[0.8rem] font-semibold"><span className="text-[0.5rem] my-auto "><SlArrowRight/></span> PhD at UvA</span>
              <span className="flex gap-1 text-[0.8rem] font-semibold"><span className="text-[0.5rem] my-auto "><SlArrowRight/></span> Research at UvA</span>
            </div>
          </div>
          <div className="flex-col flex gap-2 lg:border-none border-b border-gray-400 mr-2">
            <h2 className="font-bold pb-3 lg:block hidden lg:my-0 my-auto ">Go to</h2>
            <div onClick={()=> setIsOpen1(current => !current)} className='lg:hidden flex  justify-between lg:border-none border-t  border-gray-400 py-4'>
              <h2 className="font-bold mb-2 lg:my-0 my-auto">Go to</h2>
              <span className='lg:hidden my-auto text-[0.7rem] pr-4'>
                { isOpen1 ? <SlArrowUp/> :<SlArrowDown/>}</span>
            </div>
            <div className={`${isOpen1 ? "block pb-3" : "hidden"}`}>
              <span className="flex gap-1 text-[0.8rem] font-semibold"><span className="text-[0.5rem] my-auto "><SlArrowRight/></span> Bachelor's programmes</span>
              <span className="flex gap-1 text-[0.8rem] font-semibold"><span className="text-[0.5rem] my-auto "><SlArrowRight/></span> Minors</span>
              <span className="flex gap-1 text-[0.8rem] font-semibold"><span className="text-[0.5rem] my-auto "><SlArrowRight/></span> Master's programmes</span>
              <span className="flex gap-1 text-[0.8rem] font-semibold"><span className="text-[0.5rem] my-auto "><SlArrowRight/></span> Professional development</span>
              <span className="flex gap-1 text-[0.8rem] font-semibold"><span className="text-[0.5rem] my-auto "><SlArrowRight/></span> Exchange</span>
              <span className="flex gap-1 text-[0.8rem] font-semibold"><span className="text-[0.5rem] my-auto "><SlArrowRight/></span> Summer School</span>
              <span className="flex gap-1 text-[0.8rem] font-semibold"><span className="text-[0.5rem] my-auto "><SlArrowRight/></span> PhD at UvA</span>
              <span className="flex gap-1 text-[0.8rem] font-semibold"><span className="text-[0.5rem] my-auto "><SlArrowRight/></span> Research at UvA</span>
            </div>
          </div>
          <div className="flex-col flex gap-2 lg:border-none border-b border-gray-400 mr-2">
            <h2 className="font-bold pb-3 lg:block hidden lg:my-0 my-auto ">Information for</h2>
            <div onClick={()=> setIsOpen2(current => !current)} className='lg:hidden flex  justify-between lg:border-none border-t  border-gray-400 py-4'>
              <h2 className="font-bold mb-2 lg:my-0 my-auto">Information for</h2>
              <span className='lg:hidden my-auto text-[0.7rem] pr-4'>
                { isOpen2 ? <SlArrowUp/> :<SlArrowDown/>}</span>
            </div>
            <div className={`${isOpen2 ? "block pb-3" : "hidden"}`}>
              <span className="flex gap-1 text-[0.8rem] font-semibold"><span className="text-[0.5rem] my-auto "><SlArrowRight/></span> BWebmail for UvA staff</span>
              <span className="flex gap-1 text-[0.8rem] font-semibold"><span className="text-[0.5rem] my-auto "><SlArrowRight/></span> Minors</span>
              <span className="flex gap-1 text-[0.8rem] font-semibold"><span className="text-[0.5rem] my-auto "><SlArrowRight/></span> Master's programmes</span>
              <span className="flex gap-1 text-[0.8rem] font-semibold"><span className="text-[0.5rem] my-auto "><SlArrowRight/></span> Professional development</span>
              <span className="flex gap-1 text-[0.8rem] font-semibold"><span className="text-[0.5rem] my-auto "><SlArrowRight/></span> Exchange</span>
              <span className="flex gap-1 text-[0.8rem] font-semibold"><span className="text-[0.5rem] my-auto "><SlArrowRight/></span> Summer School</span>
              <span className="flex gap-1 text-[0.8rem] font-semibold"><span className="text-[0.5rem] my-auto "><SlArrowRight/></span> PhD at UvA</span>
              <span className="flex gap-1 text-[0.8rem] font-semibold"><span className="text-[0.5rem] my-auto "><SlArrowRight/></span> Research at UvA</span>
            </div>
          </div>
          <div className="flex-col flex gap-2 lg:border-none border-b border-gray-400 mr-2">
            <h2 className="font-bold pb-3 lg:block hidden lg:my-0 my-auto ">Contact</h2>
            <div onClick={()=> setIsOpen3(current => !current)} className='lg:hidden flex  justify-between lg:border-none border-t  border-gray-400 py-4'>
              <h2 className="font-bold mb-2 lg:my-0 my-auto">Information for</h2>
              <span className='lg:hidden my-auto text-[0.7rem] pr-4'>
                { isOpen3 ? <SlArrowUp/> :<SlArrowDown/>}</span>
            </div>
            <div className={`${isOpen3 ? "block pb-3" : "hidden"}`}>
              <span className="flex gap-1 text-[0.8rem] font-semibold"><span className="text-[0.5rem] my-auto "><SlArrowRight/></span> Contact information</span>
              <span className="flex gap-1 text-[0.8rem] font-semibold"><span className="text-[0.5rem] my-auto "><SlArrowRight/></span> Locations</span>
              <span className="flex gap-1 text-[0.8rem] font-semibold"><span className="text-[0.5rem] my-auto "><SlArrowRight/></span> Contact Student Services</span>
              <span className="flex gap-1 text-[0.8rem] font-semibold"><span className="text-[0.5rem] my-auto "><SlArrowRight/></span> The UvA and social media</span>
            </div>
          </div>
        </div>
        <div className=" border-t border-gray-400 lg:flex hidden justify-between px-2 text-gray-400 py-4 mt-8">
          <div className="flex gap-2">
            <a href="#">Copyright UvA 2023</a>
            <a href="#">About this site</a>
            <a href="#">Privacy</a>
            <a href="#">Cookie settings</a>
          </div>
          <div className="gap-2 flex my-auto">
            <p>Follow UvA on social media</p>
            <span className="my-auto"><FaFacebookF/></span>
            <span className="my-auto"><FaTwitter/></span>
            <span className="my-auto"><FaFacebookF/></span>
            <span className="my-auto"><FaTwitter/></span>
          </div>  
        </div>
        <div className="flex flex-col gap-4 lg:hidden mt-12">
          <p className="text-center">Follow UvA on  social media</p>
          <div className="flex justify-around">
            <span className="my-auto"><FaFacebookF/></span>
            <span className="my-auto"><FaTwitter/></span>
            <span className="my-auto"><FaFacebookF/></span>
            <span className="my-auto"><FaFacebookF/></span>
            <span className="my-auto"><FaFacebookF/></span>
            <span className="my-auto"><FaTwitter/></span>
          </div>
          <p className="text-center">Copyright UvA 2023</p>
          <p className="text-center">Bout this site <span className="inline-bolck px-1">Privacy</span> Cookie Settings</p>
        </div>
      </section>
      </section>
  )
}