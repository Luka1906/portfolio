import Card from "../ui/Card";
import { motion } from "motion/react";

interface ExperienceCardProps {
  role: string;
  company: string;
  date: string;
  location: string;
  description: string[];
  skills: string[];
}

const cardContainer = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut" as const,
    },
  },
};

export default function ExperienceCard({
  role,
  company,
  date,
  location,
  description,
  skills,
}: ExperienceCardProps) {
  return (
    <motion.div
      variants={cardContainer}
      initial="hidden"
      whileInView="visible"
      whileHover={{
        y: -3,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        y: {
          duration: 0.25,
          ease: "easeOut",
        },
      }}
    >
      <Card className="transition-colors duration-300 hover:border-accent/50">
        {/* Header */}
        <div>
          <h3 className="text-lg font-semibold text-primary-text sm:text-xl">
            {role}
          </h3>

          <p className="mt-1 text-sm font-medium text-accent">{company}</p>

          {/* Date and location - mobile/tablet only */}
          <div className="mt-3 flex flex-wrap items-center gap-x-2 text-sm text-muted-text lg:hidden">
            <span>{date}</span>
            <span aria-hidden="true">·</span>
            <span>{location}</span>
          </div>
        </div>

        {/* Description */}
        <div className="mt-4 max-w-4xl space-y-2">
          {description.map((paragraph, index) => (
            <p key={index} className="text-sm  lg:leading-6 text-body-text">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Skills */}
        <ul className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-md border border-accent/60 px-3 py-1.5 text-xs lg:text-sm text-accent"
            >
              {skill}
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}
