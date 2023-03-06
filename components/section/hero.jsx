import { IoIosArrowRoundForward } from "react-icons/io"

export default function Hero(){
  return(
    <section className="relative max-w-[80rem] mx-auto mt-20 lg:mt-[13rem]">
        <div className="flex gap-6 lg:gap-[10rem] lg:flex-row flex-col justify-center mt-6 lg:mt-12 ">
          <div className="lg:pt-20 lg:pl-auto pl-4">
            <h2 className="lg:text-4xl text-5xl lg:font-bold font-semibold leading-[4rem]">University of Amsterdam</h2>
            <p className="lg:text-2xl text-3xl mt-1 leading-[3rem]">Inspiring generations since 1632</p>
          </div>
          <div className="">
            <img className="lg:w-[34.2rem] lg:h-[31.25rem] w-11/12 lg:object-cover mx-auto" src="/assets/images/hero.jpeg" alt="" />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-6 w-full absolute lg:top-[22rem] top-[30rem] lg:pl-[4.5rem] pl-10  ">
          <div className="cursor-pointer bg-white shade flex w-[19.5rem] border border-red p-4">
            <div>
              <h2 className="text-red">Bachelor's</h2>
              <p>20+ English taught Bachelor's programmes</p>
            </div>
            <span className="text-red my-auto text-2xl"><IoIosArrowRoundForward/></span>
          </div>
          <div className="cursor-pointer bg-white shade flex w-[19.5rem] border border-red p-4">
            <div>
              <h2 className="text-red">Master's</h2>
              <p>20+ English taught Bachelor's programmes</p>
            </div>
            <span className="text-red my-auto text-2xl"><IoIosArrowRoundForward/></span>
          </div>
          <div className="cursor-pointer bg-white shade flex w-[19.5rem] border border-red p-4">
            <div>
              <h2 className="text-red">Professional development</h2>
              <p>20+ English taught Bachelor's programmes</p>
            </div>
            <span className="text-red my-auto text-2xl"><IoIosArrowRoundForward/></span>
          </div>
        </div>
      </section>
  )
}