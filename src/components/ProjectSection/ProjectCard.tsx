import AnimatedLink from "../ui/AnimatedLink";
import Card from "../ui/Card";
import type { ProjectData } from "./Projects";
import { ExternalLink, ArrowRight } from "lucide-react";
import { BsGithub } from "react-icons/bs";

import { motion } from "motion/react";

interface ProjectCardProps {
  project: ProjectData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
  <motion.div
  initial={{ opacity: 0, y: 6}}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ y: -6 }}
  viewport={{ once: true, amount: 0.1 }}
  transition={{
    y: {
      duration: 0.3,
      ease: "easeOut",
    },
    opacity: {
      duration: 0.5,
      ease: "easeOut",
    },
  }}
  className="h-full"
>
      <Card className="rounded-xl h-full transition-colors duration-300 hover:border-accent/50">
        <div className=" flex flex-col gap-5 flex-1">
          {/* Image and description */}
          <div className="flex flex-col gap-5 xl:flex-row xl:items-center ">
           {project.image && (
  <div className="w-full shrink-0 overflow-hidden rounded-lg border border-border xl:w-[320px]">
    <img
      src={project.image}
      alt={`${project.title} screenshot`}
      loading="lazy"
      decoding="async"
      className="block aspect-[4/3] w-full object-cover object-center xl:aspect-[320/255]"
    />
  </div>
)}

            <div className="flex min-w-0 flex-1 flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-semibold">{project.title}</h3>

                {project.professional && (
                  <span className="rounded-md border border-accent/60 px-2 py-1 text-xs text-accent">
                    Professional Project
                  </span>
                )}

                {project.inProgress && (
                  <span className="text-xs text-muted-foreground">
                    In Development
                  </span>
                )}
              </div>

              <p className="text-sm leading-relaxed text-body-text">
                {project.description}
              </p>
            </div>
          </div>

          {/* Tech stack and links */}
          <div className="mt-auto flex flex-col gap-5">
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((stack) => (
                <li
                  key={stack}
                  className="rounded-md border border-accent/60 px-3 py-1.5  text-xs sm:text-sm text-accent"
                >
                  {stack}
                </li>
              ))}
            </ul>

            {(project.website || project.github) && (
              <div className="flex flex-wrap items-center gap-6">
                {project.website && (
                  <AnimatedLink
                    href={project.website}
                    y={-1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-accent px-3 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </AnimatedLink>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm transition-colors duration-200 hover:text-accent"
                  >
                    <BsGithub size={16} />
                    GitHub
                    <ArrowRight className="text-accent" size={16} />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
