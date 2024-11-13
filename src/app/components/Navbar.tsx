"use client";

import { useState } from "react";
import Wrapper from "@/app/components/wrapper/Wrapper";
import Link from "next/link";
import { IoClose } from "react-icons/io5"; // Import the close icon from react-icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggles the menu open/close
  };

  return (
    <section  className="overflow-x-hidden">
      <Wrapper>
        <div className="flex justify-between items-center py-3 overflow-x-hidden">
          <div>
            <h2 className=" text-lg pl-1 lg:text-3xl font-extrabold  sm:text-lg md:text-xl  ">FASHION</h2>
          </div>

          {/* Hamburger Menu (Visible on small screens) */}
          <button onClick={toggleMenu} className="md:hidden focus:outline-none ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="23px"
              fill="#5f6368"
            >
              <path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z" />
            </svg>
          </button>

          {/* Navigation Menu (Hidden on small screens) */}
          <ul className="hidden md:flex md:space-x-5 md:text-xs md:mr-1 lg:text-base lg:space-x-9 font-semibold items-center">
            <li className="hover:scale-105 hover:text-[#E6C744] duration-300">
              <Link href={"/"}>HOME</Link>
            </li>
            <li className="hover:scale-105 hover:text-[#E6C744] duration-300">
              <Link href={"/about"}>ABOUT</Link>
            </li>
            <li className="hover:scale-105 hover:text-[#E6C744] duration-300">
              <Link href={"/contact"}>CONTACT</Link>
            </li>
           
            <button className="bg-black text-white md:px-2 md:py-2 rounded-lg hover:text-black hover:bg-[#E6C744] hover:scale-105 duration-500 -mt-1">
              SIGN UP
            </button>
            <button className="bg-black text-white md:px-2 md:py-2 rounded-lg hover:text-black hover:bg-[#E6C744] hover:scale-105 duration-500 -mt-1">
              SIGN IN
            </button>
          </ul>

          {/* Dashboard Menu (Visible when hamburger is clicked) */}
          <ul
            className={`absolute top-0 left-0 bg-[#C2C8D8] h-full w-1/2 z-50 p-10  ${menuOpen ? "block" : "hidden"}`}
          >
            {/* Close Button (Visible when the menu is open) */}
            <div className="absolute top-2 right-2">
              <button onClick={toggleMenu} className="focus:outline-none">
                <IoClose size={25} />
              </button>
            </div>
            
            <li className="hover:scale-105 hover:text-[#E6C744] duration-300 my-5 text-xs ml-1 sm:text-sm sm:my-6">
              <Link href={"/"}>HOME</Link>
            </li>
            <li className="hover:scale-105 hover:text-[#E6C744] duration-300 my-5 text-xs ml-1 sm:text-sm sm:my-6">
              <Link href={"/about"}>ABOUT</Link>
            </li>
            <li className="hover:scale-105 hover:text-[#E6C744] duration-300 my-5 text-xs ml-1 sm:text-sm sm:my-6">
              <Link href={"/contact"}>CONTACT</Link>
            </li>
           
            
            {/* Added margin to create space between buttons */}
            <button className="bg-black text-white md:px-3 md:py-2 rounded-lg md:text-sm hover:text-white hover:bg-[#E6C744] hover:scale-105 duration-500 sm:mt-7 mt-3 mr-1 text-sm px-2 py-1 font-medium mb-2">
              Sign Up
            </button>
            <button className="bg-black text-white md:px-3 md:py-2 rounded-lg md:text-md hover:text-white hover:bg-[#E6C744] hover:scale-105 duration-500 px-2 py-1 text-sm font-medium ">
              Sign In
            </button>
          
          </ul>
        </div>
      </Wrapper>
    </section>
  );
}