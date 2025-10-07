'use client';
import Link from 'next/link'
import React, {useRef, useState} from 'react'
import { motion } from 'framer-motion';
const page = () => {
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const [showBurger, setShowBurger] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen)
    
  }

  return (
    <section  className='bg-[#69CF73] min-h-screen flex px-3.5 font-[Jetbrains_Mono]'>
      {/* pc view */}
      {/* header */}
      <div className='flex flex-row justify-between'>
        <header className='text-8xl font-normal'>experience</header>


        <div className='md:w-20 md:h-20 fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 rounded-full bg-black cursor-pointer right-10 top-4' 
        onClick={toggleMenu}
        style={showBurger ? {clipPath: "circle(50% at 50% 50%)"} : {clipPath: "circle(0% at 50% 50%"}}
        >
          <motion.span className='block w-8 h-0.5 bg-white rounded-full origin-center' ref={topLineRef}
           animate={isOpen ? { rotate: 45 , y:6 } : { rotate: 0 }} 
           transition={{ duration: 0.3 }}

          ></motion.span>
          <motion.span className='block w-8 h-0.5 bg-white rounded-full origin-center' ref={bottomLineRef}
            animate={isOpen ? {rotate: -45, y:0} : {rotate: 0}} 
            transition={{ duration: 0.3 }}

          ></motion.span>
        </div>
      </div>
    </section>
  )
}

export default page
