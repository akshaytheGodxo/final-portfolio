"use client";
import Navbar from "@/components/Navbar";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Comp2 from "./comps/2";
import Comp1 from "./comps/1";
import Image from "next/image";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth transitions
  const firstSectionY = useTransform(scrollYProgress, [0, 0.3], ["0%", "-20%"]);
  const secondSectionY = useTransform(scrollYProgress, [0.3, 1], ["30%", "0%"]);
  const firstSectionOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const secondSectionOpacity = useTransform(scrollYProgress, [0.3, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden px-4 sm:px-8 font-[Jetbrains_Mono]">
      {/* Header */}
      <header className="text-4xl sm:text-6xl md:text-8xl mt-8 mb-12 font-normal tracking-tight">
        &lt;ABOUT /&gt;
      </header>

      {/* Section 1 - Intro */}
      <motion.div
        style={{ y: firstSectionY, opacity: firstSectionOpacity }}
        className="flex flex-col md:flex-row items-center justify-between gap-10 mb-32"
      >
        <div className="max-w-xl">
          <h2 className="text-3xl text-[#5a3e36] sm:text-4xl font-semibold mb-4">Who I Am</h2>
          <p className="text-[#666666] leading-relaxed">
            I'm Akshay — a full-stack developer passionate about crafting elegant, high-performance web apps and interactive
            experiences. I enjoy turning complex ideas into simple, intuitive interfaces that people love to use.
          </p>
          <p className="text-[#666666] mt-4">
            Currently, I’m exploring the intersection of technology, design, and storytelling — blending animation,
            interactivity, and functional UI to create impactful digital experiences.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-64 h-64 rounded-3xl overflow-hidden shadow-lg"
        >
          <Image
            src="/my_image.png"
            alt="Akshay profile"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>
      </motion.div>

      {/* Section 2 - Journey */}
      <motion.div
        style={{ y: secondSectionY, opacity: secondSectionOpacity }}
        className="flex flex-col items-start justify-center space-y-6"
      >
        <h2 className="text-3xl sm:text-4xl text-[#5a3e36] font-semibold mb-2">My Journey</h2>
        <p className="text-[#666666] leading-relaxed max-w-2xl">
          From developing indie games in C++ with SFML to building production-grade web platforms using Next.js, TypeScript,
          and Prisma — my path has been all about learning, experimenting, and growing through hands-on creation.
        </p>
        <p className="text-[#666666] max-w-2xl">
          Over the years, I’ve interned at multiple startups, contributed to open-source, and built products that blend
          functionality with creativity. Whether it’s backend logic or pixel-perfect UI, I aim to make it meaningful.
        </p>
      </motion.div>

    
    </div>
  );
}
