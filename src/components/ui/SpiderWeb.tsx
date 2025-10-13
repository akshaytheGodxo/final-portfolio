"use client";
import { useRef, useEffect, useState } from 'react';
import Lottie, { LottieRef } from 'lottie-react';
import spiderwalkAnimation from "../../../public/ZilqHC70eW.json";



import Image from 'next/image';


// interface SpiderWebProps {
//     company: string;
//     duration: string;
//     title: string;
//     description: string;
// }


interface SpiderWebProps {
    experiences: [
        {
            company: string;
            duration: string;
            title: string;
            description: string;
            position: string;
        }
    ]
}

export function SpiderWeb({ experiences }: SpiderWebProps) {
    const [isScrolling, setIsScrolling] = useState(false);
    const [scrollDirection, setScrollDirection] = useState<string>();
    const [scrollPosition, setScrollPosition] = useState(0);
    const [atWeb, setAtWeb] = useState(false);
    const lottieRef = useRef(null);
    const style = {
        height: 186,
        transform: `${scrollDirection === "down" ? "rotate(180deg)" : "rotate(0deg)"}`,
        transition: "transform 0.3s ease",
        position: 'sticky',
        top: `${scrollPosition * 100}px`

    }



    useEffect(() => {



        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;

            setIsScrolling(true);

            if (currentScrollY > scrollPosition) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }
            setScrollPosition(currentScrollY);
            console.log(scrollDirection);
            console.log(scrollPosition);



        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scrollend', () => setIsScrolling(false));
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('scrollend', () => setIsScrolling(false))
        };
    }, [scrollPosition, isScrolling]);

    useEffect(() => {
        if (isScrolling) {
            lottieRef.current?.play();
        } else {
            lottieRef.current?.pause();
        }
    })

    return (
        <div className="text-black w-full flex flex-col items-center justify-center relative">
            {experiences.map((exp, index) => (
                <div key={index} className="grid grid-cols-3 items-center justify-center w-full relative">
                    {/* left part */}
                    {exp.position === "left" ? (
                        <div className='bg-[#4FA669] px-4 py-2 flex flex-col space-y-2 w-[418] h-[280] left-100 relative'>
                            <h2 className=' text-white text-[30px]'>{exp.company}</h2> <br />
                            <h2 className='text-white/80 text-[20px]'>{exp.duration}</h2> <br />
                            <p className='text-white/60 text-[12px]'> 
                                {exp.title} <br />
                                {exp.description}
                            </p>

                        </div>
                    ) : (<div className=''>

                    </div>)}

                    {/* middle part */}
                    <div className="relative flex justify-center">
                        <div className="h-80 w-[2px] bg-white relative">
                            
                        </div>
                        <Image
                                src={"/Spider web.svg"}
                                alt='Spider web'
                                width={71}
                                height={58}
                                objectFit='contain'
                                className='absolute'
                            />
                    </div>

                    {/* right part */}
                    {exp.position === "right" ? (
                        <div className='px-4 py-2 flex flex-col space-y-2 bg-[#4FA669] w-[418] h-[226] relative right-66 top-2'>
                            <h2 className=' text-white text-[30px]'>{exp.company}</h2> <br />
                            <h2 className='text-white/80 text-[20px]'>{exp.duration}</h2> <br />
                            <p className='text-white/60 text-[12px]'> 
                                {exp.title} <br />
                                {exp.description}
                            </p>
                        </div>
                    ) : (<div className=''>

                    </div>)}
                </div>
            ))}

            <Lottie
                animationData={spiderwalkAnimation}
                lottieRef={lottieRef}
                loop
                autoplay
                style={{
                    height: 186,
                    transform:
                        scrollDirection === 'down' ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    position: 'absolute',
                    top: `${scrollPosition * 1.5}px`,
                    zIndex: 3,
                }}
                className="w-fit"
            />

            <section className="min-h-screen"></section>
        </div>

    )
}