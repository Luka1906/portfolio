import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  return (
    <section className="relative">
      <ParticleBackground />

      <div className="relative z-10 flex items-center justify-around pt-15">
        <HeroImage />
        <HeroText />
      </div>
    </section>
  );
}