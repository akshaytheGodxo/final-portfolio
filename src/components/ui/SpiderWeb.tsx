"use client";
import { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";
import spiderwalkAnimation from "../../../public/ZilqHC70eW.json";
import Image from "next/image";

interface Experience {
  company: string;
  duration: string;
  title: string;
  description: string;
  position: "left" | "right";
}

interface SpiderWebProps {
  experiences: Experience[];
}

export function SpiderWeb({ experiences }: SpiderWebProps) {
  const lottieRef = useRef<any>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? "down" : "up";
      setScrollDirection(direction);
      lastScrollY = currentScrollY;

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const progress = Math.min(scrollTop / (docHeight - winHeight), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerHeight = containerRef.current?.clientHeight || 0;
  const spiderTop = scrollProgress * (containerHeight - 150); 

  useEffect(() => {
    lottieRef.current?.play();
  }, [scrollDirection]);

  return (
    <div
      ref={containerRef}
      className="relative w-full flex flex-col items-center justify-center overflow-hidden px-4 sm:px-8"
    >
      <div className="absolute top-0 bottom-0 w-[2px] bg-white/40 left-1/2 -translate-x-1/2 z-0" />

      <div className="flex flex-col gap-24 sm:gap-32 mt-40">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-3 items-center justify-center w-full max-w-6xl mx-auto gap-6 md:gap-0"
          >
            {/* left section */}
            {exp.position === "left" ? (
              <div className="bg-[#4FA669] px-5 py-4 rounded-2xl shadow-lg flex flex-col gap-2 md:ml-auto w-full md:w-[380px] lg:w-[420px] text-center md:text-left">
                <h2 className="text-white text-xl sm:text-2xl font-semibold">{exp.company}</h2>
                <p className="text-white/80 text-sm sm:text-base">{exp.duration}</p>
                <p className="text-white/60 text-xs sm:text-sm">{exp.title}</p>
                <p className="text-white/60 text-xs sm:text-sm">{exp.description}</p>
              </div>
            ) : (
              <div className="hidden md:block" />
            )}

            {/* middle web line */}
            <div className="relative flex justify-center items-center">
              {/* <div className="h-[300px] sm:h-[400px] w-[2px] bg-white relative"></div> */}
              <Image
                src="/Spider web.svg"
                alt="Spider web"
                width={70}
                height={70}
                className="absolute w-[60px] sm:w-[70px]"
              />
            </div>

            {/* right section */}
            {exp.position === "right" ? (
              <div className="bg-[#4FA669] px-5 py-4 rounded-2xl shadow-lg flex flex-col gap-2 md:mr-auto w-full md:w-[380px] lg:w-[420px] text-center md:text-left">
                <h2 className="text-white text-xl sm:text-2xl font-semibold">{exp.company}</h2>
                <p className="text-white/80 text-sm sm:text-base">{exp.duration}</p>
                <p className="text-white/60 text-xs sm:text-sm">{exp.title}</p>
                <p className="text-white/60 text-xs sm:text-sm">{exp.description}</p>
              </div>
            ) : (
              <div className="hidden md:block" />
            )}
          </div>
        ))}
      </div>

      <Lottie
        animationData={spiderwalkAnimation}
        lottieRef={lottieRef}
        loop
        autoplay
        style={{
          height: 130,
          position: "absolute",
          top: `${spiderTop}px`,
          transform: scrollDirection === "down" ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.25s ease",
          zIndex: 10,
        }}
        className="w-fit"
      />

      <div className="h-[200px] w-full flex flex-col items-center justify-center mt-[50px] sm:mt-[300px] text-white">
        <Image
          src="/Spider web.svg"
          alt="End Web"
          width={100}
          height={100}
          className="w-[80px] sm:w-[100px]"
        />
        <p className="mt-4 text-base sm:text-lg text-center opacity-70">
          The journey ends here 🕸️
        </p>
      </div>
    </div>
  );
}
