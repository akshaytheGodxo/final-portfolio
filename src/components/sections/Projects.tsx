import { PinContainer } from "../ui/3d-pin";


const projects = [
  {
    title: "Pookie Wallet",
    href: "https://finance-app-eight-alpha.vercel.app/",
    image: "/finance-app.png",
    header: "Pookie Wallet",
    description: (
      <>
        An AI-based fintech app built with <span className="text-slate-200 font-medium">Next.js</span> that helps users analyze stock market trends and get personalized recommendations.
      </>
    ),
    tags: "FinTech • AI • Next.js"
  },
  {
    title: "Designer Portfolio",
    href: "https://www.aadrikasinghal.com/",
    image: "/aadrika-singhal.png",
    header: "Aadrika Singhal",
    description: (
      <>
        A modern portfolio site crafted using <span className="text-slate-200 font-medium">Next.js</span> and <span className="text-slate-200 font-medium">Tailwind CSS</span>, featuring animations powered by <span className="text-slate-200 font-medium">Framer Motion</span>.
      </>
    ),
    tags: "Portfolio • Next.js • Tailwind"
  },
  {
    title: "Cubical Green",
    href: "https://cubicalgreen.com/",
    image: "/cubical-green.png",
    header: "Cubical Green",
    description: (
      <>
        A sustainability-focused web platform connecting eco-friendly startups with investors, built using <span className="text-slate-200 font-medium">React</span> and <span className="text-slate-200 font-medium">Node.js</span>.
      </>
    ),
    tags: "Startup • React • Node.js"
  },
  {
    title: "GameLearn",
    href: "https://gamelearn-demo.vercel.app/",
    image: "/gamelearn.png",
    header: "GameLearn",
    description: (
      <>
        An interactive <span className="text-slate-200 font-medium">Next.js</span> + <span className="text-slate-200 font-medium">Unity WebGL</span> project gamifying finance education through real-time market simulations.
      </>
    ),
    tags: "EdTech • Gamification • Unity"
  },
  {
    title: "DevTrackr",
    href: "https://devtrackr.vercel.app/",
    image: "/devtrackr.png",
    header: "DevTrackr",
    description: (
      <>
        A productivity tracker for developers integrating <span className="text-slate-200 font-medium">Supabase</span> authentication and <span className="text-slate-200 font-medium">tRPC</span> for blazing-fast API communication.
      </>
    ),
    tags: "Fullstack • Supabase • tRPC"
  },
  {
    title: "VisionAI",
    href: "https://visionai-labs.vercel.app/",
    image: "/visionai.png",
    header: "VisionAI",
    description: (
      <>
        A computer vision web app that performs object detection and tracking in real time using <span className="text-slate-200 font-medium">TensorFlow.js</span> and <span className="text-slate-200 font-medium">Next.js</span>.
      </>
    ),
    tags: "AI • Computer Vision • TensorFlow.js"
  }
];


export default function Projects() {
  return (
    <section>
      <div className="relative flex flex-col items-center justify-center sm:px-5 px-10 mt-32 mx-auto gap-16">
        <header className="text-6xl font-bold text-center text-white">
          Projects
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {projects.map((project, idx) => (
          <PinContainer
            title={project.title}
            href={project.href}
          >
            <div className="flex flex-col justify-between w-[20rem] sm:w-[22rem] h-[26rem] rounded-2xl bg-[#1e1e22]/90 backdrop-blur-md p-5 border border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group">
          
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt="Alt"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              {/* Text */}
              <div className="flex flex-col gap-2 mt-4">
                <h3 className="text-lg font-semibold text-white">
                  {project.header}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
              {/* Tag / Footer */}
              <div className="mt-4 flex items-center justify-end">
                <span className="text-xs font-medium text-accent uppercase tracking-wide">
                  {project.tags}
                </span>
              </div>
            </div>
          </PinContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
