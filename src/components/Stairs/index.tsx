// components/TransitionProvider.tsx
"use client";
import { motion, AnimatePresence, animate } from "framer-motion";
import { usePathname } from "next/navigation";
import { opacity, expand } from "./anim";
import './styles.css'
export default function TransitionProvider({ children, backgroundColor }: { children: React.ReactNode, backgroundColor?: string }) {
  const pathname = usePathname();

  const anim = (variants:any, custom=null) => {
    return {
        initial: "initial",
        animate: "enter",
        exit: "exit",
        custom,
        variants,
    }


  }

  const nbOfColumns = 5;

  return (
    <AnimatePresence mode="wait">
      <div className="page stairs" key={pathname}>
          <motion.div
            {...anim(opacity)}
            className="transition-background"
          ></motion.div>
          <div className="transition-container">{
                [...Array(nbOfColumns)].map((_, i) => {
                    return (
                        <motion.div key={i} {...anim(expand, nbOfColumns - i)}/>
                    )
                })
            }</div>
          {children}
      </div>
    </AnimatePresence>
  );
}
