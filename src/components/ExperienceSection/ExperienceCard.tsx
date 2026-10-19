
import Card from "../ui/Card";

interface ExperienceCardProps {
  role: string;
  company: string;
  description: string[];
  skills: string[];
}

export default function ExperienceCard({
  role,
  company,
  description,
  skills,
}: ExperienceCardProps) {
  return (
    <Card>
        {/* Header */}
      <div>
        <h3 className="text-xl font-semibold text-primary-text">
          {role}
        </h3>

        <p className="mt-1 text-sm font-medium text-accent">
          {company}
        </p>
      </div>

      {/* Description */}

      <div className="mt-4 max-w-4xl space-y-2">
        {description.map((paragraph, index) => (
          <p
            key={index}
            className="text-sm leading-6 text-body-text"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Skills */}

      <ul className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-md border border-accent/60 px-3 py-1.5 text-sm text-accent"
          >
            {skill}
          </li>
        ))}
      </ul>
    </Card>
  );
}