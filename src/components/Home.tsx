"use client";
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function MainHome() {
    return (
        <section className="min-h-screen grid grid-cols-1 md:grid-cols-3  ">
            <div className="flex flex-col ">
                <Image
                    src="/laptop-typer.png"
                    alt="Typing in Laptop"
                    width={250}
                    height={221}
                    className="mt-22 ml-5"
                />
            </div>

            <div className="flex flex-col items-center  text-center space-y-12 mt-0">
                <h2 className="font-[Jetbrains_Mono] mt-4 text-black text-4xl font-thin">
                    Akshay Singh Chauhan
                </h2>

                <div className="grid grid-rows-3 gap-8">
                    <Link
                        href="#home"
                        className="font-[Jetbrains_Mono] text-black text-8xl"
                    >
                        home
                    </Link>
                    <Link
                        href="#experience"
                        className="font-[Jetbrains_Mono] text-black text-8xl"
                    >
                        experience
                    </Link>
                    <Link
                        href="#about"
                        className="font-[Jetbrains_Mono] text-black text-8xl"
                    >
                        about
                    </Link>
                </div>

                <div className="grid grid-rows-2 gap-6.5 font-[Jetbrains_Mono]">
                    <button className="w-[304px] h-[68px] bg-black text-white rounded-[45px]">
                        Let's connect
                    </button>
                    <button className="w-[304px] h-[68px] shadow-xl bg-transparent border border-black text-black rounded-[45px]">
                        View resume
                    </button>
                </div>
                <div className="grid grid-cols-2 ">
                    <Link
                        href={"https://github.com/akshaytheGodxo/"}
                        target="_blank"
                    >
                        <Image
                            src={"/GitHub.png"}
                            alt="GitHub"
                            width={65}
                            height={59}
                        />
                    </Link>
                    <Link
                        href={"https://www.linkedin.com/in/akshay-singh-chauhan-wow/"}
                        target="_blank"
                    >
                        <Image
                            src={"/LinkedIn Circled.png"}
                            alt="LinkedIn"
                            width={72}
                            height={59}
                        />
                    </Link>
                </div>
            </div>

            <div className=" md:block items-center justify-center flex flex-col">
                <div className="w-full flex flex-col items-center justify-center relative">
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 528 }}
                        transition={{ duration: 1.8, ease: "easeInOut" }}
                        className="w-[2px] bg-black"
                    />

                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: 500 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="absolute top-0"
                    >
                        <Image
                            src="/Spider.png"
                            alt="Spider"
                            width={90}
                            height={90}
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
