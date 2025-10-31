import Image from "next/image"
import {motion} from "framer-motion";
import Navbar from "@/components/Navbar";
export default function Comp1() {
    return (
        <section className=" min-h-screen px-4  grid grid-cols-2 ">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-normal mt-4 sm:mt-6">
                    &lt;ABOUT ME /&gt;
                    <div className=" mt-35 space-y-8">
                        <motion.p
                            className="tracking-[24%] text-4xl font-normal overflow-hidden"
                        >
                            <
                            >Hi!... this is Akshay</> <br />here,<br />
                            some random gibberish <br />
                            Idk what the fuck is <br /> going onnn... <br />
                            I am currently pursuing Btech. from <br /> Gla university, Mathura.
                        </motion.p>
                        <motion.p className="tracking-[24%] text-4xl font-normal overflow-hidden">
                            I am currently <br /> pursuing  Btech. from <br /> Gla university, <br /> Mathura.
                        </motion.p>
                    </div>
            
                </div>
                <div className="image-id mt-56 ml-auto mr-33">
                        <Image
                            src={"/my_image.png"}
                            alt="My Image"
                            width={464}
                            height={618}
                        />
                    </div>
            
            </section>
    )
}