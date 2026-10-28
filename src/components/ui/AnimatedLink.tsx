import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

interface AnimatedLinkProps extends HTMLMotionProps<"a"> {
  children: ReactNode;
  y?: number;
  stiffness?: number;
  damping?: number;
}

export default function AnimatedLink({
  children,
  y = -2,
  stiffness = 300,
  damping = 20,
  className,
  ...props
}: AnimatedLinkProps) {
  return (
    <motion.a
      {...props}
      className={className}
      whileHover={{ scale: 1.03, y:-2 }}
      whileTap={{ scale: 0.97 }}
      transition={{
        type: "spring",
        stiffness,
        damping,
      }}
    >
      {children}
    </motion.a>
  );
}