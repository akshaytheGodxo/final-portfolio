// ExperienceTimeline.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
const experiences = [
  {
    company: "BridgeIn",
    role: "Full Stack Developer Intern",
    duration: "May 2024 – Aug 2024",
    description:
      "Built and optimized a networking platform for startups using Next.js, Prisma, and tRPC. Enhanced API performance and implemented dashboard analytics.",
    technologies: ["Next.js", "Prisma", "tRPC", "TypeScript"],
    bannerImageUrl: "/images/bridgein.png",
    position: 'right',
  },
  {
    company: "Cubical Green",
    role: "Full Stack Developer Intern",
    duration: "Jan 2024 – Apr 2024",
    description:
      "Developed the company website and internal tools using React and Node.js. Improved load times and added real-time updates for grant management.",
    technologies: ["Next.js", "Prisma", "tRPC", "TypeScript"],
    bannerImageUrl: "/images/bridgein.png",
    position: 'left',
  },
  {
    company: "Avrutti (SIH Project)",
    role: "Backend Developer",
    duration: "2023",
    description:
      "Designed backend APIs for agricultural IoT system using Node.js and Express. Implemented data range validation and efficient device communication.",
    technologies: ["Next.js", "Prisma", "tRPC", "TypeScript"],
    bannerImageUrl: "/images/bridgein.png",
    position: 'right',
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="min-h-screen bg-[#1c1c22] py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2b2b2b] mb-10">
          My Experience
        </h2>

        <div className="flex flex-row justify-between p-12" >
        {experiences.map((exp, index) => (
            <Card
              company={exp.company}
              role={exp.role}
              duration={exp.duration}
              description={exp.description}
              technologies={exp.technologies}
              bannerImageUrl={exp.bannerImageUrl}
              position={exp.position}
            />
          ))}        
          </div>
      </div>
    </section>
  );
}




