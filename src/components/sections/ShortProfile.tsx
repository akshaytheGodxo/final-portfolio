import { BentoGrid, BentoGridItem } from "../ui/bento-grid"

export default function ShortProfile() {
    return (
        <section>

            <div className="relative flex flex-col items-center justify-center sm:px-5 px-10 mt-32 mx-auto gap-16">
                <header className="text-6xl">Short Profile</header>
                <BentoGrid className="max-w-7xl  mx-auto md:auto-rows-[20rem]">
                    {items.map((item, idx) => (
                        <BentoGridItem 
                            key={idx}
                            title={item.heading}
                            description={item.description}
                            header={item.image}
                            image={item.image}
                            className={item.className}
                            
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    )
}

const items = [
  {
    heading: "About Me",
    description: "Full-stack developer passionate about creating fast, modern web experiences. I enjoy solving real-world problems with clean and scalable code.",
    image: "/about-image.jpeg",
    
    className:"",
  },
  {
    heading: "Tech Stack",
    description: "Skilled in React, Next.js, TypeScript, Node.js, Prisma, and Tailwind CSS. Currently exploring Three.js and real-time web architectures.",
    image: "/profile-tech.webp",
    className: "",
  },
  {
    heading: "Experience",
    description: "Previously interned at Cubical Green and BridgeIn, contributing to full-stack feature development and UI enhancements.",
    image: "/profile-exp.jpeg",
    className: "md:row-span-2 ",
  },
  {
    heading: "Projects",
    description: "Built a fintech game-based learning platform, an AI-powered video analyzer, and a mapping solution for delivery tracking.",
    image: "/profile-projects.jpg",
    className: "md:col-span-2 "
  },
  
];
