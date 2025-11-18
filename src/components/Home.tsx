"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Education from "./sections/Education";
import ShortProfile from "./sections/ShortProfile";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import { cn } from "@/lib/utils";
export default function Mainskills() {
  const router = useRouter();

  return (
    <section className="relative  w-full ">
      

      <div className="z-20 relative">
        <Header />
        <Hero /> 
        <Education />
        <ShortProfile />
        <Projects />
        <Experience />
      </div>
    </section>
  );
}
