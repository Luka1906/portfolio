import ProjectCard from "./ProjectCard";
import fiflow from "../../assets/project-images/fitflow.webp";
import cida from "../../assets/project-images/cida.webp";
import serbshop from "../../assets/project-images/serbshop.webp";
import socializer from "../../assets/project-images/socializer.webp";
import chatme from "../../assets/project-images/chatme.webp";
import ScatteredStars from "../ui/ScatteredStars";

export interface ProjectData {
  id: number;
  title: string;
  image?: string;
  inProgress?: boolean;
  professional?: boolean;
  description: string;
  stack: string[];
  github?: string;
  website?: string;
}

export default function Projects() {
  const projects: ProjectData[] = [
    {
      id: 1,
      title: "CIDA",
      image: cida,
      inProgress: true,
      professional: true,
      description:
        "An AI-powered platform that processes HOA documents and generates structured reports. Features automated data extraction, real-time processing updates, and an interactive interface for reviewing and correcting AI-generated answers.",

      stack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "TanStack Router",
        "shadcn/ui",
      ],
    },
    {
      id: 2,
      title: "FitFlow",
      image: fiflow,
      description:
        "Fitness tracking application that helps users monitor their workouts, water intake, and weight. Features personalized fitness goals, daily activity logging, interactive charts, progress history, and user authentication.",
      stack: ["React", "Tailwind CSS", "Express", "PostgreSQL", "Chart.js"],
      github: "https://github.com/Luka1906/fitflow-fitness-tracker",
      website: "https://fitflow-luka.netlify.app/",
    },
    {
      id: 3,
      title: "SerbShop",
      image: serbshop,
      description:
        "E-commerce application that allows users to browse products, filter by category, and manage their shopping cart. Features JWT-based authentication, password recovery, and Stripe payment integration.",
      stack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
      github: "https://github.com/Luka1906/Webshop-app",
      website: "https://serbshop.netlify.app/",
    },
    {
      id: 4,
      title: "ChatMe",
      image: chatme,
      description:
        "A real-time messaging application that lets users exchange messages instantly. Features user authentication, persistent conversation history, and real-time communication using Socket.IO.",
      stack: ["React", "Node.js", "Socket.IO", "MongoDB"],
      github: "https://github.com/Luka1906/MERN-Chat-App",
      website: "https://chatme-chatapp.netlify.app/",
    },
    {
      id: 5,
      title: "Socializer",
      image: socializer,
      description:
        "A full-stack social media application where users can create, edit, and delete posts, add friends, and like posts. Features user authentication and state management with Redux Toolkit.",
      stack: ["React", "Material UI", "Express", "MongoDB", "Redux Toolkit"],
      github: "https://github.com/Luka1906/Social-Media-App",
      website: "https://socializer-app.netlify.app/",
    },
  ];
return (
  <section id="projects" className="relative px-12.5 py-12">
    {/* Blue glow */}
    <div className="pointer-events-none absolute -top-64 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-[120px]" />

    {/* Scattered stars */}
    <div className="pointer-events-none absolute inset-x-0 -top-12 h-[280px]">
      <ScatteredStars />
    </div>

    {/* Projects content */}
    <div className="relative z-10">
      <h2 className="font-accent text-[40px] text-primary-text">
        Projects<span className="text-accent">.</span>
      </h2>

      <div className="mt-12 grid grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
);
}
