import { motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa6";
import DeveloperCard from "./DeveloperCard";
import AnimatedLink from "../ui/AnimatedLink";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 4,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function HeroText() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-150 flex flex-col gap-6 sm:gap-8 lg:gap-9"
    >
      <div className="flex flex-col gap-3 sm:gap-5 xl:gap-8  ">
        <motion.p
          variants={itemVariants}
          className="sm:text-base lg:text-lg uppercase tracking-wider text-accent font-medium"
        >
          Hi, I'm
        </motion.p>

        <div className="flex flex-col gap-2">
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(2.25rem,6vw,5rem)] font-extrabold font-accent text-white leading-none"
          >
            Luka Matovic
            <span className="text-[clamp(2.25rem,6vw,5rem)] text-accent ">
              .
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-medium text-[clamp(1.25rem,3.5vw,3.25rem)]   text-secondary-text leading-none"
          >
            Software Developer
          </motion.p>
        </div>
      </div>

      <div className="flex flex-col items-start gap-6">
        <motion.div variants={itemVariants} className="w-full">
          <DeveloperCard />
        </motion.div>

        <motion.div variants={buttonVariants}>
          <AnimatedLink
            href="#projects"
            className="flex items-center bg-accent rounded-lg text-sm lg:text-base px-3 lg:px-6  py-3 lg:py-4 gap-2.5 lg:gap-3.5 text-background font-semibold cursor-pointer transition-colors hover:bg-accent-hover"
          >
            View projects
            <FaArrowRight />
          </AnimatedLink>
        </motion.div>
      </div>
    </motion.section>
  );
}
