"use client"


import { useState } from "react";
import Wrapper from "@/app/components/wrapper/Wrapper";


export default function Footer() {
  const [message, setMessage] = useState("");

  const handleSendClick = () => {
    setMessage ("Email Sent Sucessfully!");
    
    // Clear the message after a few seconds (optional)
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <section className="overflow-x-hidden">
      
      <div className="bg-[#E6C744] text-center space-y-4 py-16 md:py-24 overflow-x-hidden">
        <Wrapper>
          <h2 className=" text-sm font-semibold sm:text-lg md:text-2xl text-white sm:font-bold ">
            JOIN SHOPPING COMMUNITY TO
          </h2>
          <h2 className=" text-md font-semibold sm:text-lg md:text-2xl text-white sm:font-bold mb-4">
            GET MONTHLY PROMO
          </h2>
          <p className="text-white text-sm font-normal sm:text-lg md:text-xl sm:font-normal mb-4">
            Type your email below and be a young and wild generation!
          </p>

          {/* Email Input and Button Container */}
          <div className="flex items-center justify-center  ">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Here"
              className=" pl-1 py-1 sm:pl-2 sm:pr-2 sm:py-1 rounded-l-md border-transparent text-gray-800"
            />
            <button
              onClick={handleSendClick}
              className="bg-black text-white py-1 px-2 sm:px-5 sm:py-1 rounded-r-md hover:bg-white sm:font-medium hover:text-black duration-300"
            >
              Send
            </button>
          </div>
          

          {/* Display the success message */}
          {message && (
            <p className="text-black text-md mt-4 font-medium">{message}</p>
          )}
        </Wrapper> 
      </div>
     
    </section>
  );
}
