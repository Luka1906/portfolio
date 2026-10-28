import { HorizontalStars } from "../ui/HorizontalStars";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  return (
    <section className="relative">
      <ParticleBackground />

      <div className="relative z-10 gap-10 flex-col lg:flex-row flex justify-around  px-5 lg:px-3 pt-6 lg:pt-15 items-center ">
        <HeroImage />

        <HeroText />
      </div>

      <HorizontalStars />
    </section>
  );
}
