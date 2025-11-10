"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Education from "./sections/Education";
import { cn } from "@/lib/utils";
import ShortProfile from "./sections/ShortProfile";
export default function Mainskills() {
  const router = useRouter();

  return (
    <section className="relative  w-full ">
      

      <div className="z-20 relative">
        <Header />
        <Hero /> 
        <Education />
        <ShortProfile />
      </div>
    </section>
  );
}
