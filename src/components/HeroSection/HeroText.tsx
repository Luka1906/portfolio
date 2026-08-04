import { FaArrowRight } from "react-icons/fa6";

export default function HeroText() {
  return (
    <section className="w-full max-w-150 flex flex-col items-start gap-9">
      <div className="flex flex-col gap-4.5">
        <p className="text-lg uppercase text-accent font-medium">Hi, I'm</p>
        <div>
          <p className="text-[80px] font-extrabold font-display text-white">
            Luka Matovic<span className="text-accent">.</span>
          </p>
          <p className="font-medium text-[52px] text-secondary-text">Software Developer</p>
        </div>
      </div>

      <div>
        <p className="text-[22px] text-body-text">
          I build modern, user-friendly web applications with a focus on clean
          code and great experience
        </p>
      </div>
      <button className="flex items-center bg-accent rounded-lg px-6 py-4 gap-3.5 text-background font-semibold">
        View projects
        <FaArrowRight/>
      </button>
    </section>
  );
}
