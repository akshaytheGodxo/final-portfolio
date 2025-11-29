import Image from "next/image";
import { MaxWidthWrapper } from "@/components/layouts/MaxWidthWrapper";
import Hero from "@/components/layouts/Hero";
import TechnicalSkills from "@/components/layouts/TechnicalSkills";
export default function Home() {
  return (
    <MaxWidthWrapper className="font-[Jetbrains_Mono]">
      <div>
        <Hero />
        <TechnicalSkills />
      </div>
    </MaxWidthWrapper>
  );
}
