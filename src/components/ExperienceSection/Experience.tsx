import { EdgeStars } from "../ui/EdgeStars";
import ExperienceCard from "./ExperienceCard";

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
      "Building an AI-powered document-processing platform that automatically extracts data and provides a clear workflow for reviewing and validating the results.",
      "Developing responsive, accessible interfaces and connecting them to backend APIs.",
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
    <section id="experience" className="py-24">
      <div className="px-12.5">
        <h2 className="font-accent text-[40px] text-primary-text">
          Experience<span className="text-accent">.</span>
        </h2>
      </div>

      <div className="relative mt-12 overflow-hidden">
        <EdgeStars />

        {/* Centers the WHOLE timeline composition */}
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="pl-[194px]">
            {/* Your original timeline structure */}
            <div className="relative flex flex-col gap-6">
              {/* Continuous vertical line */}
              <div className="absolute inset-y-0 left-0 w-px bg-border" />

              {experiences.map((experience) => (
                <div key={experience.id} className="relative pl-15.5">
                  {/* Date + location */}
                  <div className="absolute right-full top-7 mr-6 w-[170px] text-right text-sm">
                    <p className="font-semibold text-primary-text">
                      {experience.date}
                    </p>

                    <p className="mt-1 text-muted-text">
                      {experience.location}
                    </p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-0 top-8 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-background">
                    <div className="h-7 w-7 rounded-full bg-accent" />

                    {/* Connector */}
                    <div className="absolute left-full top-1/2 h-px w-[45px] -translate-y-1/2 bg-border" />
                  </div>

                  <ExperienceCard
                    role={experience.role}
                    company={experience.company}
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