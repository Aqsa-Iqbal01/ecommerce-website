import Hero from "./components/Hero";
import Wrapper from "./components/wrapper/Wrapper";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <Hero />
       <Wrapper>
        {/* MAIN */}
        <section className="bg-white overflow-x-hidden">
          <div className="overflow-x-hidden">
            <h2 className=" text-sm font-semibold  pt-20 pb-3 sm:text-lg md:text-xl md:pt-24 md:pb-4">NEW ARRIVALS</h2>
            <div className="flex items-center  justify-evenly mt-10">
              <div className="flex flex-col  items-center">
                <Image
                  src="/hoodies.png"
                  alt="hoodies"
                  width={500}
                  height={500}
                  className="w-10/12 sm:w-11/12 md:w-full object-cover hover:scale-105 duration-300 mb-1"
                />
                <h2 className="text-xs font-normal sm:text-sm sm:font-medium md:text-base md:font-semibold">Hoodies & shirts</h2>
                <a
                  href="#Hoodies"
                  className="text-xs font-light sm:text-sm sm:font-normal md:text-base md:font-medium text-gray-600 hover:scale-105 duration-300"
                >
                  Explore {"->"}
                </a>
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src="/coats.png"
                  alt="coats"
                  width={500}
                  height={500}
                  className="w-10/12 sm:w-11/12 md:w-full  object-cover hover:scale-105 duration-300 mb-2 "
                />
                <h2 className="text-xs font-normal sm:text-sm sm:font-medium md:text-base md:font-semibold">Coats & Parkas</h2>
                <a
                  href="#Coats"
                  className="text-xs font-light sm:text-sm sm:font-normal md:text-base md:font-medium text-gray-600 hover:scale-105 duration-300"
                >
                  Explore {"->"}
                </a>
              </div>

              <div className="flex flex-col  items-center">
                <Image
                  src="/shirts.png"
                  alt="shirts"
                  width={500}
                  height={500}
                  className="w-10/12 sm:w-11/12 md:w-full  object-cover hover:scale-105 duration-300 mb-2 "
                />
                <h2 className= "text-xs font-normal sm:text-sm sm:font-medium md:text-base md:font-semibold">T-Shirts & Tees</h2>
                <a
                  href="#T-Shirt"
                  className="text-xs font-light sm:text-sm sm:font-normal md:text-base md:font-medium text-gray-600 hover:scale-105 duration-300"
                >
                  Explore {"->"}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* main section 2 */}

        <section>
          <div className="flex items-center justify-evenly  sm:space-x-10 my-12 bg-amber-300 rounded-3xl">
            <div>
              <Image
                src="/IMG.png"
                alt="IMG"
                width={500}
                height={500}
                className="w-10/12 sm:w-11/12 md:w-full object-cover"
              />
            </div>
            <div className="">
              <h2 className="text-lg font-medium sm:text-xl sm:font-semibold  md:text-3xl md:font-bold  inline-block -rotate-1 mt-2  bg-white pl-2 pr-2 lg:text-6xl lg:text-extrabold lg:my-4 ">
                PAYDAY
              </h2>
              <h2 className="text-lg font-medium sm:text-xl sm:font-semibold  md:text-3xl md:font-bold mb-2 lg:text-6xl lg:text-extrabold lg:mb-3">SALE NOW</h2>
              <p className="text-sm font-medium  sm:font-semibold  md:text-base md:font-semibold lg:text-lg lg:font-semibold">
                Spend minimal $100 get 30% off
              </p>
              <p className="text-sm font-normal sm:font-semibold md:text-base md:font-semibold md:mb-4 lg:text-lg lg:font-semibold">
                Voucher code for your next purchase
              </p>
              <p className=" text-sm font-medium sm:font-semibold md:text-base md:font-semibold md:mb-2 lg:text-lg lg:font-semibold">
                Terms & conditions apply
              </p>
              <button className="lg:mx-10 bg-black lg:px-4 lg:py-2 rounded-lg text-white lg:text-lg lg:font-semibold hover:bg-white  hover:text-black hover:scale-105 duration-500 text-xs my-2 px-2 py-1 font-normal ml-6 sm:text-sm sm:py-2 md:text-base md:font-medium lg::text-lg">
                Shop Now
              </button>
            </div>
          </div>

          {/* images */}
          <div>
          <h2 className="text-lg font-semibold md:text-2xl md:font-extrabold">Young&apos;s Favourite</h2>
          </div>

          <div className="flex gap-3 my-5 ml-5  items-center justify-center sm:gap-10 sm:my-10 sm:ml-16">
           <div className=" w-11/12 sm:w-11/12">
              <Image
                src="/inst.png"
                alt="IMG"
                width={500}
                height={500}
                className="object-cover  size-10/12 hover:scale-105 mb-4 duration-300"
              />
              <h2 className="text-xs font-normal sm:text-sm sm:font-medium md:text-lg md:font-medium">Trending on instagram</h2>
              <a href="#" className="text-xs  sm:text-sm text-gray-500 hover:scale-105 duration-300">Explore {"->"}</a>
            </div> 
            <div className=" w-11/12 sm:w-11/12">
              <Image
                src="/inst2.png"
                alt="IMG"
                width={500}
                height={500}
                className="object-cover  size-10/12 hover:scale-105 mb-4 duration-300 "
              />
               <h2 className="text-xs font-normal sm:text-sm sm:font-medium md:text-lg md:font-medium">All under $40</h2>
               <a href="#" className="text-xs sm:text-sm text-gray-500 hover:scale-105 duration-300">Explore {"->"}</a>
            </div>


          </div>
        </section>
      </Wrapper> 
    </>
  );
}