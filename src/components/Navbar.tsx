"use client";
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
const Navbar = () => {
    const topLineRef = useRef(null);
    const bottomLineRef = useRef(null);
    const [showBurger, setShowBurger] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    function toggleMenu() {
        setIsOpen(!isOpen)

    }
    return (
        <>
            <nav className='fixed  flex flex-col justify-between h-full px-10 uppercase bg-black text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2'>
                <div className='flex flex-col text-8xl font-normal gap-y-2'>
                    {['home', 'experience', 'about', 'contact'].map((section, index) => (
                        <div key={index}>
                            <Link href={`/${section}`} className='transition-all duration-300 cursor-pointer hover:text-white'>{section}</Link>
                        </div>
                    ))}

                </div>
            </nav>

            <div className='md:w-20 md:h-20 fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 rounded-full bg-black cursor-pointer right-10 top-4'
                onClick={toggleMenu}
                style={showBurger ? { clipPath: "circle(50% at 50% 50%)" } : { clipPath: "circle(0% at 50% 50%" }}
            >
                <motion.span className='block w-8 h-0.5 bg-white rounded-full origin-center' ref={topLineRef}
                    animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0 }}
                    transition={{ duration: 0.3 }}

                ></motion.span>
                <motion.span className='block w-8 h-0.5 bg-white rounded-full origin-center' ref={bottomLineRef}
                    animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0 }}
                    transition={{ duration: 0.3 }}

                ></motion.span>
            </div>
        </>
    )
}

export default Navbar
