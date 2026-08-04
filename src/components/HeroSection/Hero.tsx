import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

export default function Hero() {
  return (
    <section className="flex justify-around items-center py-7.5">
     
      <HeroImage />
      <HeroText />
    </section>
  );
}
