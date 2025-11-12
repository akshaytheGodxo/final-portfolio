import { PinContainer } from "../ui/3d-pin";

export default function Projects() {
  return (
    <section>
      <div className="relative flex flex-col items-center justify-center sm:px-5 px-10 mt-32 mx-auto gap-16">
        <header className="text-6xl font-bold text-center text-white">
          Projects
        </header>

        <PinContainer
          title="Pookie Wallet"
          href="https://finance-app-eight-alpha.vercel.app/"
        >
          <div className="flex flex-col justify-between w-[22rem] h-[25rem] rounded-2xl bg-[#1e1e22] p-4 border border-white/10 shadow-md hover:shadow-lg transition-all duration-300">
            
            {/* Image */}
            <div className="relative w-full h-48 overflow-hidden rounded-xl">
              <img
                src="/finance-app.png"
                alt="Pookie Wallet"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-2 mt-4">
              <h3 className="text-lg font-semibold text-white">
                Pookie Wallet
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                An AI-based fintech app built with <span className="text-slate-200 font-medium">Next.js</span> that helps users analyze stock market trends and get personalized recommendations.
              </p>
            </div>

            {/* Tag / Footer */}
            <div className="mt-4 flex items-center justify-end">
              <span className="text-xs font-medium text-accent uppercase tracking-wide">
                FinTech • AI • Next.js
              </span>
            </div>
          </div>
        </PinContainer>
      </div>
    </section>
  );
}
