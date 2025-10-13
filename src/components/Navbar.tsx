"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const [showBurger, setShowBurger] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {
        <motion.nav
          animate={isOpen ? { x: 0 } : { x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed top-0 flex flex-col justify-between h-full px-6 sm:px-8 md:px-10 uppercase bg-[#4FA655] text-white/80 py-20 sm:py-24 md:py-28 gap-y-8 sm:gap-y-10 w-full sm:w-3/4 md:w-1/2 md:left-1/2 z-50"
        >
          {/* Nav Links */}
          <div className="flex flex-col text-5xl sm:text-6xl md:text-8xl font-normal gap-y-2">
            {["home", "experience", "about", "contact"].map((section, index) => (
              <div key={index}>
                <Link
                  href={`/${section === "home" ? "" : section}`}
                  className="transition-all duration-300 cursor-pointer hover:text-white"
                >
                  {section}
                </Link>
              </div>
            ))}
          </div>

          {/* Email Section */}
          <div className="flex flex-col gap-y-1 sm:gap-y-2">
            <label className="text-base sm:text-xl md:text-2xl text-[#E4DFDF] opacity-[89%] font-normal">
              E-MAIL
            </label>
            <label className="text-base sm:text-xl md:text-2xl text-white font-normal lowercase break-all">
              akshaysinghc230@gmail.com
            </label>
          </div>

          {/* Footer Links */}
          <div className="flex flex-row flex-wrap gap-x-2 sm:gap-x-4">
            <p className="text-white font-normal text-xl sm:text-2xl">{`{`}GITHUB{`}`}</p>
            <p className="text-white font-normal text-xl sm:text-2xl">{`{`}RESUME{`}`}</p>
          </div>
        </motion.nav>
      }

      {/* Burger Button */}
      <div
        className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 fixed flex flex-col items-center justify-center gap-1 transition-all duration-300 rounded-full bg-[#4FA655] cursor-pointer right-4 sm:right-6 md:right-10 top-4 sm:top-6 z-50"
        onClick={toggleMenu}
        style={
          showBurger
            ? { clipPath: "circle(50% at 50% 50%)" }
            : { clipPath: "circle(0% at 50% 50%)" }
        }
      >
        <motion.span
          className="block w-6 sm:w-7 md:w-8 h-0.5 bg-white rounded-full origin-center"
          ref={topLineRef}
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        ></motion.span>
        <motion.span
          className="block w-6 sm:w-7 md:w-8 h-0.5 bg-white rounded-full origin-center"
          ref={bottomLineRef}
          animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        ></motion.span>
      </div>
    </>
  );
};

export default Navbar;
