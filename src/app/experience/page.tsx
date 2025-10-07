'use client';
import Link from 'next/link'
import React from 'react'
import Navbar from '@/components/Navbar';
const page = () => {
  

  return (
    <section  className='bg-[#69CF73] min-h-screen flex px-3.5 font-[Jetbrains_Mono]'>
      {/* pc view */}
      {/* header */}
      <div className='flex flex-row justify-between'>
        <header className='text-8xl font-normal'>experience</header>
        <Navbar /> 
      </div>
    </section>
  )
}

export default page
