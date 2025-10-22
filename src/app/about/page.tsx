"use client";
import Navbar from "@/components/Navbar"
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image";
import Comp2 from "./comps/2";
import Comp1 from "./comps/1";
export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });


    const frame8Y = useTransform(scrollYProgress, [0, 0.5], ["0%", "-100%"]);
    const frame8Opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const frame8Rotate = useTransform(scrollYProgress, [0, 0.5], ["0deg", "-5deg"]);
    const frame9Rotate = useTransform(scrollYProgress, [0.3, 0.8], ["5deg", "0deg"]);

    const frame9Y = useTransform(scrollYProgress, [0.3, 1], ["100%", "0%"]);
    const frame9Opacity = useTransform(scrollYProgress, [0.3, 0.8], [0, 1]);

    return (
        <div className="bg-[#69CF73] min-h-screen px-4" ref={containerRef}>
            <Comp1 />
            <Comp2 />
        </div>
    )

}