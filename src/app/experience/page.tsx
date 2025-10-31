// ExperienceTimeline.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    company: "BridgeIn",
    role: "Full Stack Developer Intern",
    duration: "May 2024 – Aug 2024",
    description:
      "Built and optimized a networking platform for startups using Next.js, Prisma, and tRPC. Enhanced API performance and implemented dashboard analytics.",
  },
  {
    company: "Cubical Green",
    role: "Full Stack Developer Intern",
    duration: "Jan 2024 – Apr 2024",
    description:
      "Developed the company website and internal tools using React and Node.js. Improved load times and added real-time updates for grant management.",
  },
  {
    company: "Avrutti (SIH Project)",
    role: "Backend Developer",
    duration: "2023",
    description:
      "Designed backend APIs for agricultural IoT system using Node.js and Express. Implemented data range validation and efficient device communication.",
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="min-h-screen bg-[#eed2cb] py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2b2b2b] mb-10">
          My Experience
        </h2>

        {/* TIMELINE CONTAINER */}
        <div className="relative">
          {/* Vertical line centered relative to container */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#c97a6c]/70" />

          {/* Items container: we place items to the right of the left line on small screens,
              and alternate centered stacking on larger screens (keeps layout simple & consistent) */}
          <div className="space-y-10 md:space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="relative md:max-w-3xl md:mx-auto"
              >
                {/* Marker */}
                <div
                  className={`absolute -left-3 md:left-1/2 md:-translate-x-1/2 top-3 w-7 h-7 rounded-full border-4 border-white bg-[#c97a6c] shadow-md`}
                />

                {/* Card: on small screens shift right to clear left column; on md+ center and width-limited */}
                <div className="ml-12 md:ml-0 md:pl-12">
                  <div className="bg-white/90 p-6 rounded-2xl shadow-sm border border-[#e9d7d3] hover:shadow-md transition-all">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                      <div>
                        <h3 className="text-xl font-semibold text-[#2b2b2b]">
                          {exp.company}
                        </h3>
                        <p className="text-sm text-[#6b5b59]">{exp.role}</p>
                      </div>
                      <div className="text-sm text-[#9b7c78] mt-2 md:mt-0 md:ml-4">
                        {exp.duration}
                      </div>
                    </div>

                    <p className="mt-4 text-[#4b4443] text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
