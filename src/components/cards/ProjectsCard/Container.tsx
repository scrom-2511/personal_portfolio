import { Project, ProjectTechnologies, Status } from "@/types";
import { EachProjectCard } from "./EachProjectCard";
import { projects } from "@/projects";

export const ProjectsContainer = () => {
  return (
    <div>
      <div className="grid grid-cols-1 w-full gap-5 md:grid md:grid-cols-2">
        {projects.map((project) => (
          <EachProjectCard
            project={project}
            redirect_string={`/project/${project.project_name}`}
          />
        ))}
      </div>
    </div>
  );
};
