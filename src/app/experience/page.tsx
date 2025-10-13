'use client';
import Link from 'next/link'
import React from 'react'
import Navbar from '@/components/Navbar'
import { desc } from 'framer-motion/client';
import { SpiderWeb } from '@/components/ui/SpiderWeb';
const experiences = [
  {
    company: "Microsoft",
    duration: "May 2024 - Aug 2024",
    title: "Software Engineer Intern",
    description: "Worked on enhancing the performance of cloud services by optimizing database queries, resulting in a 15% reduction in latency.",
    position: "left"
  },
  {
    company: "Google",
    duration: "May 2023 - Aug 2023",
    title: "Software Engineer Intern",
    description: "Developed a new feature for Google Maps that improved user navigation experience, leading to a 10% increase in user engagement.",
    position: "right",

  },
  {
    company: "Amazon",
    duration: "May 2022 - Aug 2022",
    title: "Software Development Intern",
    description: "Contributed to the development of a scalable microservices architecture for the e-commerce platform, enhancing system reliability and maintainability.",
    position: "left"
  },
  {
    company: "Facebook",
    duration: "May 2021 - Aug 2021",
    title: "Software Engineer Intern",
    description: "Implemented a machine learning algorithm to improve content recommendation, resulting in a 20% increase in user retention.",
    position: "right"
  },
  
]



const page = () => {
  return (
    <section className='bg-[#69CF73] min-h-screen flex flex-col px-3.5 font-[Jetbrains_Mono] '>
      {/* header */}
      <div className='flex flex-row justify-between'>
        <header className='text-8xl font-normal'>experience</header>
        <Navbar />
      </div>
      
      {/* timeline */}
      <div className='relative w-full mt-16'>
        <SpiderWeb experiences={experiences}/>
      </div>
    </section>
  )
}

export default page
