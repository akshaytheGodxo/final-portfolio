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
}

export function Accordion({ experiences }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full font-[Jetbrains_Mono] mt-45">
      {experiences.map((exp, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={idx}
            className="border-t-2 border-black py-4 cursor-pointer"
            onClick={() => handleToggle(idx)}
          >
            <div className="flex justify-between items-center">
              <Image
                src={"/Arrow.svg"}
                alt="Arrow"
                width={40}
                height={40}
                className={`transition-transform duration-300 ${
                  isOpen ? "-rotate-90" : ""
                }`}
              />
              <label className="text-black text-3xl sm:text-5xl font-bold text-right">
                {exp.company}
              </label>
            </div>

            <motion.div
              className="overflow-hidden"
              initial={false}
              animate={{
                height: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="text-right text-lg sm:text-xl font-light leading-relaxed mt-2">
                {exp.description}
              </div>
            </motion.div>
          </div>
        );
      })}
    </section>
  );
}
