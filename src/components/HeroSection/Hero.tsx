import { HorizontalStars } from "../ui/HorizontalStars";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  return (
    <section className="relative flex flex-col pt-20 lg:min-h-dvh">
      <ParticleBackground />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-5 pt-8 pb-16 lg:flex-1 lg:flex-row lg:justify-between lg:gap-10 lg:px-10 lg:py-8">
        <HeroImage />
        <HeroText />
      </div>

      <HorizontalStars />
    </section>
  );
}
