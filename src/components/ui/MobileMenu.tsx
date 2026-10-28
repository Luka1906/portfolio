
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { motion } from "motion/react";

import resume from "../../assets/Luka Matovic - Resume.pdf";
import AnimatedLink from "./AnimatedLink";

interface MobileMenuProps {
  onClose: () => void;
}

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
const menuVariants = {
  hidden: {
    opacity: 0,
    y: -12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      ease: "easeOut" as const,
    
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.15,
      ease: "easeOut" as const,
    },
  },
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: -8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut" as const,
    },
  },
   

};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
   
    },
  },
};

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.nav
      id="mobile-menu"
      aria-label="Mobile navigation"
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute top-full left-0 z-50 w-full border-b border-border bg-navbar px-5 py-6 shadow-xl sm:px-8 lg:hidden"
    >
      <motion.div
        variants={listVariants}
        className="flex flex-col gap-6"
      >
        {/* Navigation links */}
        <ul
   
          className="flex flex-col gap-1"
        >
          {navItems.map((item) => (
            <motion.li
              key={item.href}
              variants={itemVariants}
            >
              <AnimatedLink
                href={item.href}
                onClick={onClose}
                className="flex w-full items-center rounded-lg px-3 py-2.5 text-base font-medium text-primary-text transition-all duration-200 hover:bg-accent/5 hover:shadow-[inset_4px_0_0_0_#6c8cff]"
              >
                {item.label}
              </AnimatedLink>
            </motion.li>
          ))}
        </ul>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="h-px w-full bg-border"
        />

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2"
        >
          <AnimatedLink
            href="https://github.com/Luka1906"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-text transition-colors duration-200 hover:bg-accent/10 hover:text-accent"
          >
            <FaGithub size={20} />
          </AnimatedLink>

          <AnimatedLink
            href="https://www.linkedin.com/in/lukamatovic/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-text transition-colors duration-200 hover:bg-accent/10 hover:text-accent"
          >
            <FaLinkedin size={20} />
          </AnimatedLink>
        </motion.div>

        {/* Resume button */}
        <motion.div
          variants={itemVariants}
          className="flex"
        >
          <AnimatedLink
            href={resume}
            download
            className="inline-flex w-full min-[400px]:w-fit items-center justify-center gap-3 rounded-lg border border-accent bg-navbar px-5 py-2.5 text-sm font-medium text-primary-text transition-colors duration-200 hover:bg-accent/10"
          >
            <span>Resume</span>
            <BsDownload size={17} className="text-accent" />
          </AnimatedLink>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}
