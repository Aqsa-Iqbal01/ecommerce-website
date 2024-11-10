import Wrapper from "@/app/components/wrapper/Wrapper";
import Image from "next/image";

export default function Hero() {
  return (
    <Wrapper>
      <section className="bg-gray-100 rounded-3xl pt-3 mt-3 overflow-x-hidden">
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="bg-white lg:text-5xl font-extrabold lg:ml-6 inline-block lg:px-4 lg:py-1 lg:pr-9 transform -rotate-2 text-sm mt-3 px-1 pr-2 ml-4 sm:text-lg md:text-xl ">
              LET&apos;S
            </h1>
            <h2 className="xl:text-5xl font-extrabold lg:mx-6 lg:px-4 lg:py-1 text-sm mt-1 ml-4 sm:text-lg md:text-xl ">
              EXPLORE{" "}
            </h2>
            <h2 className="bg-[#E6C744] lg:text-5xl font-extrabold lg:mx-6 inline-block lg:px-4 lg:py-1 lg:pr-9 transform -rotate-2 text-sm mt-1 px-1 pr-2 ml-4 sm:text-lg md:text-xl">
              UNIQUE
            </h2>
            <h2 className="lg:text-5xl font-extrabold lg:mx-6 lg:px-4 lg:py-1 text-sm mt-1 px-1 pr-2 ml-4 sm:text-lg md:text-xl">
              CLOTHES.
            </h2>
            <p className="lg:py-5 lg:mt-6 lg:mx-10 lg:text-xl font-semibold text-gray-500 text-xs ml-4 mt-3 sm:text-sm md:text-lg">
              Live for influential and innovation fashion!
            </p>
            <button className="lg:mx-10 bg-black lg:px-4 lg:py-2 rounded-lg text-white lg:text-lg lg:font-semibold hover:bg-[#E6C744] hover:text-white hover:scale-105 duration-500 text-xs my-2 px-2 py-1 font-normal ml-4 sm:text-sm sm:py-2 md:font-semibold">
              Shop Now
            </button>
          </div>
          <div className="  sm:w-5/12 md:w-2/5 lg:w-5/12 ">
            
            {/* Wrap Image with div for responsiveness */}
            <Image
              src="/main.png"
              alt="picture"
              width={500}
              height={400}
              className="object-cover size-11/12 rounded-xl "
              // Use responsive layout
            />
          </div>
          
        </div>
        <div className="absolute w-full mt-2 left-5 sm:w-full  sm:left-9 md:left-12" >
            
            {/* Wrap Image with div for responsiveness */}
            <Image
              src="/brands.png"
              alt="picture"
              width={500}
              height={500}
              className="object-cover size-11/12 "
              // Use responsive layout
            />
          </div>
      </section>
    </Wrapper>
  );
}