"use client";
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation";
export default function MainHome() {

    const router = useRouter();

    return (
        <section className="min-h-screen grid grid-cols-1  md:grid-cols-3  ">
            {/* mobile view */}
            <div className="flex flex-col px-5 md:hidden">
                <div className="flex  md:hidden h-fit">
                    <button className="md:hidden ml-auto flex flex-col gap-y-2 text-black ">
                        <Image
                            src={"/equal.png"}
                            alt=""
                            width={52}
                            height={44}
                        />
                    </button>
                </div>
                <div className="font-[Jetbrains_Mono] flex flex-col ">
                    <h4 className="font-thin text-[32px] mt-21">Akshay Singh Chauhan</h4>
                    <div className="grid grid-rows-3 grid-cols-1 mt-39 space-y-[30px]">
                        <Link
                            href="#home"
                            className="font-[Jetbrains_Mono] text-black text-6xl"
                        >
                            home
                        </Link>
                        <Link
                            href="#experience"
                            className="font-[Jetbrains_Mono] text-black text-6xl"
                        >
                            experience
                        </Link>
                        <Link
                            href="#about"
                            className="font-[Jetbrains_Mono] text-black text-6xl"
                        >
                            about
                        </Link>
                    </div>
                </div>

                <div className="flex flex-row mt-43">
                    <Image 
                        src={"/GitHub.png"}
                        alt="GitHub"
                        width={80}
                        height={40}
                    />
                    <Image 
                        src={"/LinkedIn Circled.png"}
                        alt="LinkedIn"
                        width={80}
                        height={40}
                    />
                </div>
            </div>

            {/* pc view */}
            <div className="md:flex flex-col hidden">
                <Image
                    src="/laptop-typer.png"
                    alt="Typing in Laptop"
                    width={250}
                    height={221}
                    className="mt-22 ml-5"
                />
            </div>

            <div className="md:flex flex-col items-center hidden  text-center space-y-12 mt-0">
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
                    <button
                        onClick={() => router.push("/experience")}
                        className="font-[Jetbrains_Mono] text-black text-8xl"
                    >
                        experience
                    </button>
                    <Link
                        href="#about"
                        className="font-[Jetbrains_Mono] text-black text-8xl"
                    >
                        about
                    </Link>
                </div>

                <div className="grid grid-rows-2 gap-6.5 font-[Jetbrains_Mono]">
                    <button className="w-[304px] h-[68px] bg-black text-white rounded-[45px] cursor-pointer">
                        Let's connect
                    </button>
                    <button className="w-[304px] h-[68px] shadow-xl bg-transparent border border-black text-black rounded-[45px] cursor-pointer">
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

            <div className="hidden md:block items-center justify-center ">
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
