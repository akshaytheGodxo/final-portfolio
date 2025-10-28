'use client';
import Link from 'next/link'
import React from 'react'
import Navbar from '@/components/Navbar'
import { SpiderWeb } from '@/components/ui/SpiderWeb'
import { Accordion } from '@/components/ui/Accordion';
const experiences = [
  {
    company: "Microsoft",
    duration: "May 2024 - Aug 2024",
    title: "Software Engineer Intern",
    description: "Worked on enhancing the performance of cloud services by optimizing database queries, resulting in a 15% reduction in latency.",
    tech: ["/skills/reactjs.png", "/skills/nodejs.svg", "/skills/typescript.png"],
    position: "left"
  },
  {
    company: "Google",
    duration: "May 2023 - Aug 2023",
    title: "Software Engineer Intern",
    description: "Developed a new feature for Google Maps that improved user navigation experience, leading to a 10% increase in user engagement.",
    position: "right",
    tech: ["/skills/reactjs.png", "/skills/nodejs.svg", "/skills/typescript.png"]

  },
  {
    company: "Amazon",
    duration: "May 2022 - Aug 2022",
    title: "Software Development Intern",
    description: "Contributed to the development of a scalable microservices architecture for the e-commerce platform, enhancing system reliability and maintainability.",
    position: "left",
    tech: ["/skills/reactjs.png", "/skills/nodejs.svg", "/skills/typescript.png"]

  },
  {
    company: "Facebook",
    duration: "May 2021 - Aug 2021",
    title: "Software Engineer Intern",
    description: "Implemented a machine learning algorithm to improve content recommendation, resulting in a 20% increase in user retention.",
    position: "right",
    tech: ["/skills/reactjs.png", "/skills/nodejs.svg", "/skills/typescript.png"]

  },
]

const projects = [
  {
    company: "Avrutti",
    tech_stack:["https://toppng.com/uploads/preview/react-logo-icon-11609374122d9vkbptqap.png"],
    duration: "2 weeks",
    url: "www.google.com",
    description: "I worked pretty hard for this",
  }, 
  
]

const Page = () => {
  return (
    <section className=' min-h-screen flex flex-col  font-[Jetbrains_Mono] overflow-x-hidden'>
      <div className='flex flex-row justify-between items-center flex-wrap gap-4 mt-4 sm:mt-6 md:mt-8'>
        <header className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-normal'>
            &lt;EXPERIENCES /&gt;

        </header>
        
      </div>

      
      <Accordion experiences={experiences} heading='My work records'/>
    </section>
  )
}

export default Page
