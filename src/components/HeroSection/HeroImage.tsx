import { motion } from "motion/react";
import avatarImage from "../../assets/profile-portrait.webp";

export default function HeroImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
     className="relative w-38 shrink-0 sm:w-48 md:w-66 lg:w-full lg:max-w-115"
    >
      <div className="aspect-square w-full overflow-hidden rounded-full border border-accent bg-[radial-gradient(circle_at_50%_65%,#263760_0%,#0d1425_45%,#080c17_75%)] lg:aspect-115/138 lg:rounded-4xl">
        <img
          src={avatarImage}
          alt="Portrait of Luka Matović"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-top"
        />
      </div>

      <div className="absolute hidden bg-background px-1.5 py-2 font-semibold text-accent lg:-right-10 lg:-bottom-6 lg:block lg:text-5xl">
        {"</>"}
      </div>
    </motion.div>
  );
}
