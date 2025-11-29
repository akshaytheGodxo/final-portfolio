"use client";
import Image from "next/image"
import { Button, buttonVariants } from "../ui/button"

import Link from "next/link"
import {
    Instagram,
    Twitter,
    Youtube,
    Github,
    Linkedin

} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="mt-28">
            <div className="flex md:flex-row flex-col justify-center items-center md:justify-between">
                <div className="flex flex-col gap-y-4 md:gap-y-16 mt-12 md:order-1 order-2">
                    <div className="md:text-left text-center space-y-2">
                        <div className="text-xl">
                            <h4>Hello I&apos;m</h4>
                        </div>

                        <div className="md:text-7xl text-4xl text-blue-500 font-sans space-y-4 font-bold">
                            <h3>Akshay Singh</h3>
                            <h3> Chauhan</h3>
                        </div>
                    </div>

                    <span className="text-muted-foreground md:text-xl text-sm max-w-sm md:max-w-lg md:text-left text-center">Software Engineer | Fullstack Developer | gaming nerd as well</span>
                </div>

                <motion.div
                    whileHover={{ rotateX: 8, rotateY: -8, scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 150, damping: 12 }}
                    className="bg-black/60 p-4 rounded-xl border-white shadow-[0_0_25px_5px_rgba(255,255,255,0.2)] perspective-1000 order-1 md:order-2 w-fit"
                >
                    <div className="md:w-100 md:h-100 h-50 w-50 relative">
                        <Image
                            src="/yuji.jpeg"
                            alt="Pfp Image"
                            fill
                            className="object-fit rounded-md object-center"
                        />
                    </div>
                </motion.div>

            </div>

            <div className="flex md:flex-row flex-col items-center  gap-4 mt-12">
                <Button variant={"secondary"}>Download CV</Button>

                <div className="inline-flex gap-4">
                    <Link href={"/"} className={cn("items-center justify-center flex", buttonVariants({
                        variant: "outline",
                        size: "icon"
                    }))} >
                        <Instagram size={16} />
                    </Link>
                    <Link href={"/"} className={cn("items-center justify-center flex", buttonVariants({
                        variant: "outline",
                        size: "icon"
                    }))} >
                        <Youtube size={16} />
                    </Link>
                    <Link href={"/"} className={cn("items-center justify-center flex", buttonVariants({
                        variant: "outline",
                        size: "icon"
                    }))} >
                        <Twitter size={16} />
                    </Link>
                    <Link href={"/"} className={cn("items-center justify-center flex", buttonVariants({
                        variant: "outline",
                        size: "icon"
                    }))} >
                        <Github size={16} />
                    </Link>
                    <Link href={"/"} className={cn("items-center justify-center flex", buttonVariants({
                        variant: "outline",
                        size: "icon"
                    }))} >
                        <Linkedin size={16} />
                    </Link>
                </div>
            </div>


            <div className="mt-16 md:mt-12 w-full flex flex-col md:flex-row md:items-center md:justify-start items-center gap-8 md:gap-16">
                <div className="flex flex-col items-center md:items-start">
                    <span className="text-white text-3xl md:text-4xl font-semibold">20</span>
                    <span className="text-xs text-muted-foreground">Age</span>
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <span className="text-white text-3xl md:text-4xl font-semibold">3</span>
                    <span className="text-xs text-muted-foreground">Years of experience</span>
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <span className="text-white text-3xl md:text-4xl font-semibold">8+</span>
                    <span className="text-xs text-muted-foreground">Projects deployed</span>
                </div>
            </div>

        </section>
    )
}