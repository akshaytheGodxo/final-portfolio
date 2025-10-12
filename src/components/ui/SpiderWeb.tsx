"use client";
import { useRef, useEffect, useState } from 'react';
import Lottie, { LottieRef } from 'lottie-react';
import spiderwalkAnimation from "../../../public/ZilqHC70eW.json";






// interface SpiderWebProps {
//     company: string;
//     duration: string;
//     title: string;
//     description: string;
// }

export function SpiderWeb() {
    const [isScrolling, setIsScrolling] = useState(false);
    const [scrollDirection, setScrollDirection] = useState<string>();
    const [scrollPosition, setScrollPosition] = useState(0);
    const lottieRef = useRef(null);
    const style = {
        height: 186,
        transform: `${scrollDirection === "down" ? "rotate(180deg)" : "rotate(0deg)"}`,
        transition: "transform 0.3s ease",
        position: 'sticky',
        top: `${scrollPosition * 0.5}px`
        
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
        return () => {window.removeEventListener('scroll', handleScroll)
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
        <div className="text-black w-full">
            <div className='grid grid-cols-3 gap-1'>
                {/* right one */}
                <div className=''>

                </div>
                {/* middle one */}
                <div className='bg-white/30 h-30 w-2'>

                </div>
                {/* left one */}
                <div className=''></div>
            </div>


            <Lottie
                animationData={spiderwalkAnimation}
                style={style}
                lottieRef={lottieRef}
                loop={true}
                autoplay={true}
                className='w-fit'
            />
            
        </div>
    )
}