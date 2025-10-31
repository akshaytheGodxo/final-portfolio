"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Mainskills() {
  const router = useRouter();

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-3  justify-center px-4 md:px-0">
      {/* mobile view */}
      <div className="flex flex-col px-4 md:hidden w-full">
        <div className="flex w-full h-fit">
          <button className="ml-auto flex flex-col gap-y-2 text-black">
            <Image src="/equal.png" alt="menu" width={40} height={30} />
          </button>
        </div>

        <div className=" flex flex-col mt-10">
          <h4 className="font-thin text-2xl sm:text-3xl mb-10">
            Akshay Singh Chauhan
          </h4>
          <div className="flex flex-col space-y-6 ">
            <Link
              href="/skills"
              className="text-5xl sm:text-6xl   text-black"
            >
              <motion.span
                whileHover={{
                  color: 'gray',
                  transition: { duration: 0.1 }
                  
                }}
                transition={{duration: 0.5}}
              >skills</motion.span>
            </Link>
            <Link
              href="#experience"
              className="text-5xl sm:text-6xl  text-black"
            >
              experience
            </Link>
            <Link
              href="/about"
              className="text-5xl sm:text-6xl  text-black"
            >
              about
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-6 mt-10 justify-center">
          <Image src="/GitHub.png" alt="GitHub" width={60} height={40} />
          <Image src="/LinkedIn Circled.png" alt="LinkedIn" width={60} height={40} />
        </div>
      </div>

      {/* left image (pc view) */}
      <div className="hidden md:flex flex-col items-center justify-center">
        
      </div>

      {/* center content (pc view) */}
      <div className="hidden md:flex flex-col items-center text-center space-y-12">
        <h2 className=" text-3xl lg:text-4xl font-thin text-black mt-4">
          Akshay Singh Chauhan
        </h2>

        <div className="grid grid-rows-3 gap-8">
          <Link
            href="/skills"
            className=" text-black text-7xl lg:text-8xl"
          >
            skills
          </Link>
          <button
            onClick={() => router.push("/experience")}
            className=" text-black text-7xl lg:text-8xl cursor-pointer"
          >
            experience
          </button>
          <Link
            href="/about"
            className=" text-black text-7xl lg:text-8xl cursor-pointer"
          >
            about
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <button className="w-[280px] lg:w-[304px] h-[60px] lg:h-[68px] bg-black text-white rounded-[45px] cursor-pointer"
            onClick={() => router.push("/connect")}
          >
            Let's connect
          </button>
          <button className="w-[280px] lg:w-[304px] h-[60px] lg:h-[68px] shadow-xl bg-transparent border border-black text-black rounded-[45px] cursor-pointer"
          onClick={() => router.push("/Intern resume (1).pdf")}
          >
            View resume
          </button>
        </div>

        <div className="flex gap-8">
          <Link href="https://github.com/akshaytheGodxo/" target="_blank">
            <Image src="/GitHub.png" alt="GitHub" width={65} height={59} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/akshay-singh-chauhan-wow/"
            target="_blank"
          >
            <Image
              src="/LinkedIn Circled.png"
              alt="LinkedIn"
              width={72}
              height={59}
            />
          </Link>
        </div>
      </div>

      {/* right side spider animation (pc view) */}
      <div className="hidden md:block items-center justify-center">
      </div>
    </section>
  );
}
