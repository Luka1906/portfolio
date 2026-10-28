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
      className="relative w-full max-w-80 sm:max-w-100 lg:max-w-115 hidden lg:block"
    >
      <div className="aspect-115/138 w-full overflow-hidden rounded-4xl border border-accent bg-[radial-gradient(circle_at_50%_65%,#263760_0%,#0d1425_45%,#080c17_75%)]">
        <img
          src={avatarImage}
          alt="Portrait of Luka Matović"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-top"
        />
      </div>

      <div className="absolute -right-3 -bottom-3 bg-background px-1.5 py-2 text-3xl font-semibold text-accent sm:-right-6 sm:-bottom-4 sm:text-4xl lg:-right-10 lg:-bottom-6 lg:text-5xl">
        {"</>"}
      </div>
    </motion.div>
  );
}
