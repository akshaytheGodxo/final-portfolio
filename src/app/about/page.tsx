"use client";
import Navbar from "@/components/Navbar";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heading } from "@/components/ui/Heading";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

export default function AboutPage() {
  const images = [
    "/elden_ring.png",
    "/dark_souls.png",
    "/sekiro.png",
    "/witcher.jpg",
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  // const content = [
  //   {
  //     title: "My Journey",
  //     description: "From a young age, I was fascinated by technology and its potential to transform lives. This passion led me to pursue a career in software development, where I have honed my skills in creating dynamic and user-friendly web applications.",
  //     content: (
  //       <div>
  //         <Image 
  //           src="/laptop-typer.png"
  //           alt=""
  //           width={300}
  //           height={221}
  //         />
  //       </div>
  //     )
  //   },
    
  // ]

  return (
    <>
      <section className="px-6 md:px-16 py-20">
        <div className="mb-16">
          <Heading className="font-black ">
            About Me
          </Heading>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-28 items-start">
          {/* Left section */}
          <div className="flex flex-col gap-10 max-w-[900px]">
            
            <p className="text-[20px] md:text-[28px] leading-relaxed text-[#3b2a24]">
              I&apos;m Akshay — a full-stack developer passionate about crafting
              elegant, high-performance web apps and interactive experiences. I
              enjoy turning complex ideas into simple, intuitive interfaces that
              people love to use.
              <br />
              <br />
              Currently, I’m exploring the intersection of technology, design,
              and storytelling — blending animation, interactivity, and
              functional UI to create impactful digital experiences.
            </p>
          </div>

          {/* Right section - horizontal images */}
          <div className="flex flex-row flex-wrap justify-center gap-6 lg:gap-8 mt-10 lg:mt-0">
            {images.map((image, index) => (
              <motion.div
                key={image}
                initial={{
                  opacity: 0,
                  y: -50,
                  rotate: 0,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: index % 2 === 0 ? 3 : -3,
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                
              >
                <Image
                  src={image}
                  width={220}
                  height={300}
                  alt="about"
                  className="rounded-md object-cover shadow-xl w-[180px] md:w-[200px] h-[200px] md:h-[240px] transform hover:rotate-0 transition duration-200"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section>
        {/* <StickyScroll content={content}/> */}
      </section>
    </>
  );
}
