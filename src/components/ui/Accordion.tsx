"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Experience {
  company: string;
  duration: string;
  title: string;
  description: string;
}

interface AccordionProps {
  experiences: Experience[];
  heading: string;
}

export function Accordion({ experiences, heading }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full mt-20 text-gray-900">
      <div className="text-5xl sm:text-6xl font-bold text-right py-6 text-[#442e28] tracking-wide">
        {heading}
      </div>

      {experiences.map((exp, idx) => {
        const isOpen = openIndex === idx;

        return (
          <motion.div
            key={idx}
            onClick={() => handleToggle(idx)}
            className={`group relative border-t border-black/20 py-5 cursor-pointer transition-all duration-300 ${
              isOpen ? "bg-black/5" : "hover:bg-black/10"
            }`}
          >
            <motion.div
              className="absolute left-0 top-0 h-full w-[2px] bg-black/70 origin-top"
              animate={{ scaleY: isOpen ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            />

            <div className="flex justify-between items-center px-2 sm:px-4">
              <Image
                src={"/Arrow.svg"}
                alt="Arrow"
                width={28}
                height={28}
                className={`transition-transform duration-300 ${
                  isOpen ? "-rotate-90" : ""
                }`}
              />
              <motion.label
                className={`font-medium text-right text-2xl sm:text-4xl transition-colors duration-300 ${
                  isOpen ? "text-[#4f362f]" : "text-[#5a3e36]/70 group-hover:text-[#5a3e36]"
                }`}
              >
                {exp.company}
              </motion.label>
            </div>

            <motion.div
              initial={false}
              animate={{
                height: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              
              <div className="text-right text-base sm:text-lg leading-relaxed mt-3 text-black/70 px-2 sm:px-4 pb-3">
                <span className="block text-sm text-black/50 mb-1">
                  {exp.duration} — {exp.title}
                </span>
                {exp.description}
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </section>
  );
}
