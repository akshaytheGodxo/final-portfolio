"use client";
import Image from "next/image"
import { Button, buttonVariants } from "../ui/button"

import Link from "next/link"
import {
    Instagram,
    Twitter,
    Youtube,
    Github,
    InstagramIcon,

} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="mt-28">
            <div className="flex md:flex-row flex-col justify-between">
                <div className="flex flex-col gap-y-16 mt-12">
                    <div className="text-left space-y-2">
                        <div className="text-xl">
                            <h4>Hi I&apos;m</h4>
                        </div>

                        <div className="text-7xl text-blue-500 font-sans space-y-4 font-bold">
                            <h3>Akshay</h3>
                            <h3>Singh Chauhan</h3>
                        </div>
                    </div>

                    <span className="text-white text-xl max-w-lg">Software Engineer | Fullstack Developer | gaming nerd as well</span>
                </div>

                <motion.div
                    whileHover={{ rotateX: 8, rotateY: -8, scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 150, damping: 12 }}
                    className="bg-black/60 p-4 rounded-xl border-white shadow-[0_0_25px_5px_rgba(255,255,255,0.2)] perspective-1000"
                >
                    <div className="w-100 h-100 relative">
                        <Image
                            src="/yuji.jpeg"
                            alt="Pfp Image"
                            fill
                            className="object-fit rounded-md object-center"
                        />
                    </div>
                </motion.div>

            </div>

            <div className="flex md:flex-row  gap-4 mt-12">
                <Button variant={"secondary"}>Download CV</Button>

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
            </div>


            <div className="flex md:flex-row flex-col gap-x-24 mt-12">
                <div className="text-white text-4xl inline-flex font-semibold gap-2">20 <span className="text-sm text-left my-auto max-w-12 flex text-muted-foreground">Age</span> </div>
                <div className="text-white text-4xl inline-flex font-semibold gap-2">3  <span className="text-sm text-left my-auto max-w-12 flex text-muted-foreground">Years of experience</span></div>
                <div className="text-white text-4xl inline-flex font-semibold gap-2">8+ <span className="text-sm text-left my-auto max-w-12 flex text-muted-foreground">projects deployed</span></div>
            </div>

        </section>
    )
}