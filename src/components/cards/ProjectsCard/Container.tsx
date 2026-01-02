import { Project, ProjectTechnologies } from "@/types";
import { EachProjectCard } from "./EachProjectCard";

export const ProjectsContainer = () => {
  const projects: Project[] = [
    {
      project_name: "Aurx",
      short_description: "A modern web app built with TypeScript and React.",
      long_description: "",
      technologies: [ProjectTechnologies.TS, ProjectTechnologies.REACT],
    },
    {
      project_name: "ShopSphere",
      short_description: "E-commerce platform with Node.js, PostgreSQL, and Prisma.",
      long_description : "",
      technologies: [
        ProjectTechnologies.NODE,
        ProjectTechnologies.EXPRESS,
        ProjectTechnologies.POSTGRES,
        ProjectTechnologies.PRISMA,
        ProjectTechnologies.REACT,
        ProjectTechnologies.TS,
      ],
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 w-full gap-5">
        {projects.map((project) => (
          <EachProjectCard project={project} />
        ))}
      </div>
    </div>
  );
};
