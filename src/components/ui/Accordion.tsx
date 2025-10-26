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
    <section className="w-full font-sans mt-20 text-gray-900">
      {/* Section heading */}
      <div className="text-4xl sm:text-5xl font-bold text-right py-6 text-black/90 tracking-wide">
        {heading}
      </div>

      {experiences.map((exp, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={idx}
            className="border-t border-black/20 py-5 cursor-pointer hover:bg-black/10 transition-colors duration-300"
            onClick={() => handleToggle(idx)}
          >
            {/* Header Row */}
            <div className="flex justify-between items-center">
              <Image
                src={"/Arrow.svg"}
                alt="Arrow"
                width={36}
                height={36}
                className={`transition-transform duration-300 ${
                  isOpen ? "-rotate-90" : ""
                }`}
              />
              <label
                className={`font-bold text-right transition-colors duration-300 ${
                  isOpen
                    ? "text-black"
                    : "text-black/70 hover:text-black/90"
                } text-2xl sm:text-6xl`}
              >
                {exp.company}
              </label>
            </div>

            {/* Description */}
            <motion.div
              className="overflow-hidden"
              initial={false}
              animate={{
                height: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="text-right text-base sm:text-lg leading-relaxed mt-3 text-black/70">
                <span className="text-black/60 block mb-2 text-sm">
                  {exp.duration} — {exp.title}
                </span>
                {exp.description}
              </div>
            </motion.div>
          </div>
        );
      })}
    </section>
  );
}
