"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SkillsPage() {
  const skills = [
    { name: "Next.js", icon: "/skills/nextjs.png" },
    { name: "React", icon: "/skills/reactjs.png" },
    { name: "TypeScript", icon: "/skills/typescript.png" },
    { name: "Tailwind CSS", icon: "/skills/tailwind.png" },
    { name: "Node.js", icon: "/skills/nodejs.svg" },
    { name: "Prisma", icon: "/skills/prisma.svg" },
    { name: "tRPC", icon: "/skills/trpc.svg" },
    { name: "Flutter", icon: "/skills/flutter.png" },
    { name: "C++", icon: "/skills/cpp.svg" },
    { name: "Three.js", icon: "/skills/threejs.png" },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16  text-black">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-[Jetbrains_Mono] font-thin mb-16"
      >
        Skills & Tools
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 md:gap-16"
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center text-center space-y-3"
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-xl shadow-md bg-white">
              <Image
                src={skill.icon}
                alt={skill.name}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="font-[Jetbrains_Mono] text-lg md:text-xl">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
