import { HoverEffect } from "../ui/card-hover-effect"
import { GraduationCap } from "lucide-react"
export default function Education() {
    const items = [
        {
            title: "Bachelor of Technology in Computer Science and Engineering",
            description: "GLA University 2023 - 2027",
            link: "https://www.gla.ac.in/", 
            percentage: "7.8 CGPA",
        },
        {
            title: "High School Certificate",
            description: "Lucknow Public School 2017 - 2023",
            link: "https://lpslko.edu.in/",
            percentage: "88.4%",
        }
    ]

    return (
        <section className="">
            <div className="relative bg-black-100 flex flex-col items-center justify-center px-5 sm:px-10 overflow-hidden mx-auto mt-32 max-w-7xl">
                <div className="flex flex-wrap text-accent text-6xl">
                    <GraduationCap size={60}/>
                    <h2 className="text-white ">Education</h2>
                </div>
                <HoverEffect items={items} className="bg-[#1c1c22]"/>
            </div>
        </section>
    )
}