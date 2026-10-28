
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "motion/react";
import Card from "../ui/Card";
import AnimatedLink from "../ui/AnimatedLink";

const stars = [
  { x: 12, y: 35, r: 1.8, delay: "0s" },
  { x: 29, y: 18, r: 2.2, delay: "1.2s" },
  { x: 46, y: 42, r: 1.5, delay: "0.6s" },
  { x: 68, y: 23, r: 2, delay: "2s" },
  { x: 84, y: 49, r: 1.6, delay: "1.6s" },
  { x: 61, y: 75, r: 2.2, delay: "0.8s" },
  { x: 34, y: 72, r: 1.5, delay: "2.4s" },
  { x: 91, y: 82, r: 1.2, delay: "1s" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

function Constellation() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] overflow-hidden lg:block"
    >
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 h-full w-full"
      >
        {/* Constellation lines */}
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="0.12"
          className="text-accent/20"
        >
          <path d="M12 35 L29 18 L46 42 L68 23 L84 49 L61 75 L34 72 L46 42" />
          <path d="M61 75 L91 82" />
        </g>

        {/* Stars */}
        {stars.map((star, index) => (
          <circle
            key={index}
            cx={star.x}
            cy={star.y}
            r={star.r / 3}
            fill="currentColor"
            className="animate-pulse text-accent"
            style={{
              animationDuration: "4s",
              animationDelay: star.delay,
              opacity: 0.85,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function Contact() {
  return (
    <motion.section
      id="contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col gap-8 px-5 py-8 lg:py-12 md:px-12.5"
    >
      {/* Section heading */}
      <motion.h2
        variants={fadeIn}
       className="font-accent text-3xl text-primary-text sm:text-4xl lg:text-[40px]"
      >
        Contact<span className="text-accent">.</span>
      </motion.h2>

      {/* Contact card */}
      <motion.div variants={fadeIn}>
        <Card className="relative flex w-full flex-col overflow-hidden p-0 md:p-8">
          <Constellation />

          {/* Content */}
          <motion.div
            variants={containerVariants}
            className="relative z-10 flex max-w-2xl flex-col gap-6"
          >
            {/* Availability */}
            <motion.div
              variants={fadeIn}
              className="flex items-center gap-2.5"
            >
              <span className="h-2 w-2 rounded-full bg-green-400" />
              <p className="text-xs font-medium text-muted-text">
                Open to new opportunities
              </p>
            </motion.div>

            {/* Heading and description */}
            <div className="flex flex-col gap-3">
              <motion.h3
                variants={fadeIn}
               className="font-accent text-xl font-semibold text-primary-text sm:text-2xl md:text-3xl"
              >
                Thanks for stopping by
                <span className="text-accent">.</span>
              </motion.h3>

              <motion.p
                variants={fadeIn}
                className="max-w-xl text-sm leading-7 text-body-text md:text-base"
              >
                I'm always happy to hear about interesting opportunities,
                projects, or just connect with people working in tech.
              </motion.p>
            </div>

            {/* Contact actions */}
            <div className="flex flex-wrap  items-center gap-4">
              <motion.div variants={fadeIn}>
                <AnimatedLink
                  href="mailto:lukamatovic1994@gmail.com"
                  y={-2}
                  className="inline-flex items-center gap-2.5 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent-hover"
                >
                  <Mail size={18} />
                  Say hello
                  <ArrowUpRight size={18} />
                </AnimatedLink>
              </motion.div>

              {/* Social media links appear last */}
              <motion.div
                variants={fadeIn}
                className="flex items-center gap-2"
              >
                <a
                  href="https://github.com/Luka1906"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my GitHub profile"
                  title="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-lg text-muted-text transition-colors duration-200 hover:bg-accent/10 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/lukamatovic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my LinkedIn profile"
                  title="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-lg text-muted-text transition-colors duration-200 hover:bg-accent/10 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <FaLinkedin size={20} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </Card>
      </motion.div>

      {/* Footer */}
      <motion.footer
        variants={fadeIn}
        className=" mt-5 lg:mt-8 flex flex-col justify-between gap-3 border-t border-border pt-6 text-xs text-muted-text sm:flex-row sm:items-center"
      >
        <p>© {new Date().getFullYear()} Luka Matović</p>
       <p>Designed in Figma · Built with React &amp; TypeScript</p>
      </motion.footer>
    </motion.section>
  );
}
