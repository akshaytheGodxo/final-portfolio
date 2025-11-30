import Image from "next/image";
import { MaxWidthWrapper } from "@/components/layouts/MaxWidthWrapper";
import Hero from "@/components/layouts/Hero";
import TechnicalSkills from "@/components/layouts/TechnicalSkills";
import ProfessionalExperience from "@/components/layouts/ProfessionalExperience";
export default function Home() {
  return (
    <MaxWidthWrapper className="font-[Jetbrains_Mono]">
      <div>
        <Hero />
        <TechnicalSkills />
        <ProfessionalExperience />
      </div>
    </MaxWidthWrapper>
  );
}
