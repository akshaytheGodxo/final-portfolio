import { cn } from "@/lib/utils"
import Link from "next/link"

import {
    Instagram,
    Facebook,
    Youtube,
    Github,
    Linkedin

} from "lucide-react";

export default function Hero() {
    return (
        <section className="">



            <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">

                <div className="max-w-7xl w-full">
                    <div className="lg:pb-20">
                        <div
                            className={cn(
                                "absolute inset-0",
                                "[background-size:100px_100px]",
                                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                                "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                            )}
                        />

                        <div className="flex justify-center relative z-9">
                            <div className="container mx-auto h-full">
                                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                                    <div className="text-center xl:text-left order-2 xl:order-none ">
                                        <span className="text-xl">Software Engineer</span>
                                        <h1 className="h1 mb-6">
                                            Hello I'm
                                            <br />
                                            <span className="text-accent">
                                                Akshay Singh<br /> Chauhan
                                            </span>
                                        </h1>
                                        <p className="max-w-[500px] mb-9 text-white/80">IT Specialist & Full-Stack Developer | Pragmatic, delivery-oriented professional</p>

                                        <div className="flex flex-col xl:flex-row items-center gap-8">
                                            <button className="cursor-pointer justify-center whitespace-nowrap rounded-full font-semibold ring-offset-white transition-colors border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary h-[56px] text-sm tracking-[2px] px-8 uppercase flex items-center gap-2"><span>Download CV</span>
                                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                            </button>
                                            <div className="mb-8 xl:mb-0">
                                                <div className="flex gap-6">
                                                    <Link href={"/"} className="border-1 border-accent hover:bg-accent p-2 w-full h-full rounded-full">
                                                        <Instagram className="w-6 h-6  text-accent hover:text-primary transition-colors" />
                                                    </Link>
                                                    <Link href={"/"} className="border-1 border-accent hover:bg-accent p-2 w-full h-full rounded-full">
                                                        <Facebook className="w-6 h-6  text-accent hover:text-primary transition-colors" />
                                                    </Link>
                                                    <Link href={"/"} className="border-1 border-accent hover:bg-accent p-2 w-full h-full rounded-full">
                                                        <Youtube className="w-6 h-6  text-accent hover:text-primary transition-colors" />
                                                    </Link>
                                                    <Link href={"/"} className="border-1 border-accent hover:bg-accent p-2 w-full h-full rounded-full">
                                                        <Github className="w-6 h-6  text-accent hover:text-primary transition-colors" />
                                                    </Link>
                                                    <Link href={"/"} className="border-1 border-accent hover:bg-accent p-2 w-full h-full rounded-full">
                                                        <Linkedin className="w-6 h-6  text-accent hover:text-primary transition-colors" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="order-1 xl:order-none mb:8 xl:mb-0">
                                        <div className="relative flex items-center justify-center w-full h-full">
                                            <div className="relative w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] flex items-center justify-center">
                                                <img
                                                    src="/witcher.jpg"
                                                    alt="Hero image"
                                                    className="w-[298px] xl:w-[498px] h-[298px] xl:h-[498px] object-cover rounded-full shadow-md shadow-accent p-3 relative z-10"
                                                />

                                                <svg
                                                    className="absolute top-0 left-0 w-full h-full animate-spin-slow"
                                                    fill="transparent"
                                                    viewBox="0 0 506 506"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <circle
                                                        cx="253"
                                                        cy="253"
                                                        r="250"
                                                        stroke="#8f8fff"
                                                        strokeWidth="4"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeDasharray="12.21548 95.95975 69.92363 56.23117"
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
                            <div className="container mx-auto">
                                <div className="flex flex-wrap gap-6 max-w-[100vw] md:max-w-[80vw] mx-auto xl:max-w-none">
                                    <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start"><div className="flex items-center gap-4" style={{ opacity: 1 }}><div className="flex items-center gap-4" style={{ opacity: 1 }}>
                                        <span className="text-4xl xl:text-6xl font-extrabold">20</span>
                                        <p className="max-w-[100px] leading-snug text-white/80">Age</p>
                                    </div></div></div>
                                    <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start"><div className="flex items-center gap-4" style={{ opacity: 1 }}><div className="flex items-center gap-4" style={{ opacity: 1 }}>
                                        <span className="text-4xl xl:text-6xl font-extrabold">2</span>
                                        <p className="max-w-[150px] leading-snug text-white/80">Years of experience</p>
                                    </div></div> </div>
                                    <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start"><div className="flex items-center gap-4" style={{ opacity: 1 }}><div className="flex items-center gap-4" style={{ opacity: 1 }}>
                                        <span className="text-4xl xl:text-6xl font-extrabold">20</span>
                                        <p className="max-w-[150px] leading-snug text-white/80">Projects worked on</p>
                                    </div></div></div>
                                    <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start"><div className="flex items-center gap-4" style={{ opacity: 1 }}><div className="flex items-center gap-4" style={{ opacity: 1 }}>
                                        <span className="text-4xl xl:text-6xl font-extrabold">8</span>
                                        <p className="max-w-[150px] leading-snug text-white/80">Projects Deployed</p>
                                    </div></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </section>
    )
}