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
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20  text-black">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl md:text-7xl  font-thin mb-20 tracking-tight"
      >
        skills
      </motion.h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 md:gap-16">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="w-24 h-24 flex items-center justify-center bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
              <Image
                src={skill.icon}
                alt={skill.name}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <p className=" text-lg text-gray-700 hover:text-black transition-colors duration-200">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="mt-24 text-sm md:text-base  text-gray-500"
      >
        <span>crafted with simplicity ⚡</span>
      </motion.div>
    </section>
  );
}
