import { HorizontalStars } from "../ui/HorizontalStars";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col">
      <ParticleBackground />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-10 px-5 lg:flex-row lg:justify-around lg:px-3">
        <HeroImage />
        <HeroText />
      </div>

      <HorizontalStars />
    </section>
  );
}