import { EdgeStars } from "../ui/EdgeStars";
import ExperienceCard from "./ExperienceCard";
import { motion } from "motion/react";

interface ExperiencesData {
  id: number;
  role: string;
  company: string;
  date: string;
  location: string;
  description: string[];
  skills: string[];
}

const experiences: ExperiencesData[] = [
  {
    id: 1,
    role: "Front-End Developer",
    company: "Ka Technology",
    date: "Jun 2026 - Present",
    location: "Remote",
    description: [
      "Building the frontend for an AI-powered platform that transforms HOA documents into structured reports. Developing document upload, extraction progress tracking, and verification interfaces that allow users to review and correct AI-extracted data.",
      "Using TanStack Query to handle API requests and manage server data.",
    ],
    skills: [
      "React",
      "TypeScript",
      "TanStack Query",
      "TanStack Router",
      "Tailwind CSS",
    ],
  },
  {
    id: 2,
    role: "Shift Manager",
    company: "Starbucks",
    date: "Nov 2023 - Present",
    location: "Chicago, IL",
    description: [
      "Lead shifts of 4–6 employees, coordinate daily operations, and help the team deliver consistent customer service in a fast-paced environment.",
    ],
    skills: ["Leadership", "Communication", "Problem Solving", "Operations"],
  },
  {
    id: 3,
    role: "Front-End Developer Intern",
    company: "Faculty of Organizational Sciences, University of Belgrade",
    date: "Oct 2022 - Sep 2023",
    location: "Belgrade, Serbia",
    description: [
      "Maintained and improved the eLab department website, implementing UI updates, fixing bugs, and improving consistency across pages. Designed the FONcast podcast website in Figma and contributed to its initial React development..",
    ],
    skills: ["React", "JavaScript", "Figma", "HTML/CSS"],
  },
  {
    id: 4,
    role: "Web Journalist",
    company: "Tango Six Group",
    date: "Nov 2018 - Jun 2020",
    location: "Belgrade, Serbia",
    description: [
      "Researched and published aviation news, technical articles, and interviews in WordPress. Occasionally reported from aviation conferences and industry events.",
    ],
    skills: ["WordPress", "Research", "Writing", "Content Management"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className=" pt-12 lg:pt-14">
   <div className="px-5 sm:px-8 md:px-10 lg:px-12.5">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
         className="font-accent text-3xl sm:text-4xl lg:text-[40px] text-primary-text"
        >
          Experience<span className="text-accent">.</span>
        </motion.h2>
      </div>

      <div className="relative mt-8 lg:mt-12 ">
        <EdgeStars />

        {/* Centers the WHOLE timeline composition */}
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-6 ">
          <div className="lg:pl-[194px]">
            {/* Your original timeline structure */}
            <div className="relative flex flex-col gap-6">
              {/* Continuous vertical line */}
              <div className="hidden lg:block absolute inset-y-0 left-0 w-px bg-border" />

              {experiences.map((experience) => (
                <div key={experience.id} className="relative lg:pl-15.5">
                  {/* Desktop date and location */}
                  <div className="absolute top-7 right-full mr-6 hidden w-[170px] text-right text-sm lg:block">
                    <p className="font-semibold text-primary-text">
                      {experience.date}
                    </p>

                    <p className="mt-1 text-muted-text">
                      {experience.location}
                    </p>
                  </div>

                  {/* Desktop timeline dot */}
                  <div className="absolute top-8 left-0 hidden h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-background lg:flex">
                    <div className="h-7 w-7 rounded-full bg-accent" />

                    <div className="absolute top-1/2 left-full h-px w-[45px] -translate-y-1/2 bg-border" />
                  </div>

                  <ExperienceCard
                    role={experience.role}
                    company={experience.company}
                    date={experience.date}
                    location={experience.location}
                    description={experience.description}
                    skills={experience.skills}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
