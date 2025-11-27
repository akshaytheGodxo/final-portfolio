import Image from "next/image";
import { MaxWidthWrapper } from "@/components/layouts/MaxWidthWrapper";
import Hero from "@/components/layouts/Hero";
export default function Home() {
  return (
    <MaxWidthWrapper className="font-[Jetbrains_Mono]">
      <div>
        <Hero />
      </div>
    </MaxWidthWrapper>
  );
}
