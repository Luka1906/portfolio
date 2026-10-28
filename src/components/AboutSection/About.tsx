import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

export default function About() {
  return (
    <section
      id="about"
   
      className="flex flex-col items-center lg:items-start lg:flex-row gap-8 px-5 sm:px-8 md:px-10 lg:px-12.5 pt-12 lg:pt-14 xl:pt-30"
    >
      <AboutText />
      <AboutImage />
    </section>
  );
}