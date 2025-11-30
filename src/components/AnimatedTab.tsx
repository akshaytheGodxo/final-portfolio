"use client";
import Image from "next/image";
import { Tabs } from "./ui/tabs";
export function AnimatedTab({ orientation }: { orientation?: "horizontal" | "vertical" }) {
    const tabs = [
        {
            title: "Nocage",
            value: "nocage",
            content: <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                <p>
                    Software Engineer Intern at Nocage - Developed and maintained web applications using NextJS and T3 stack, improving user engagement and utilities.
                </p>
                <div className="w-full h-full  relative mt-10">
                    <Nocage />
                </div>
            </div>

        },
        {
            title: "Cubical Green",
            value: "cubical-green",
            content: <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-green-700 to-teal-900">
                <p>
                    Frontend Developer Intern at Cubical Green - Crafted responsive UI components with React and Tailwind CSS, enhancing the visual appeal and functionality of client projects.
                </p>
                <div className="w-full h-full  relative mt-10">
                    <CubicalGreen />
                </div>
            </div>
        },
        {
            title: "Personal Portfolio",
            value: "personal-portfolio",
            content: <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-blue-700 to-cyan-900">
                <p>
                    Developed a personal portfolio website using Next.js and Tailwind CSS to showcase projects and skills, resulting in increased visibility and networking opportunities.
                </p>
                <div className="w-full h-full  relative mt-10">
                    <Portfolio />

                </div>
            </div>
        },
        {
            title: "STF",
            value: "stf",
            content: <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-cyan-900">
                <p>
                    Contract project for a VC firm - Built a simple frontend heavy website using Nextjs and framer motion.
                </p>
                <div className="w-full h-full  relative mt-10">
                    <STF />
                </div>
            </div>
        },
    ]
    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
            <Tabs
                tabs={tabs}

                outerClassName="items-center justify-center"
                tabClassName=""
                activeTabClassName=""
                contentClassName=""
            />
        </div>
    )
}


const Nocage = () => {
    return (
        <Image
            src="/nocage.jpeg"
            alt="dummy image"
            fill
            className=" object-fit   "
        />
    );
};
const CubicalGreen = () => {
    return (
        <Image
            src="/cg.png"
            alt="dummy image"
            fill
            className=" object-fit   "
        />
    );
};

const STF = () => {
    return (
        <Image
            src="/stf.png"
            alt="dummy image"
            fill
            className=" object-fit   "
        />
    );
}
const Portfolio = () => {
    return (
        <Image
            src="/portfolio.png"
            alt="dummy image"
            fill
            className=" object-fit   "
        />
    );
}