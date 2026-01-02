import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Project, ProjectTechnologies } from "@/types";
import { Facebook, Github, MoveUpRight, Twitter } from "lucide-react";

export const EachProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="p-10">
      <div className="flex flex-row justify-between">
        <CardTitle className="text-xl">{project.project_name}</CardTitle>
        <div className="flex flex-row items-center gap-3">
          <a href="somethign">
            <Github></Github>
          </a>
          <a href="">
            <MoveUpRight></MoveUpRight>
          </a>
        </div>
      </div>
      <div className="w-full h-36 bg-white rounded-2xl"></div>
      <CardDescription>{project.short_description}</CardDescription>
      <Technologies technologies={project.technologies} />
    </Card>
  );
};

const Technologies = ({
  technologies,
}: {
  technologies: Array<ProjectTechnologies>;
}) => {
  return (
    <div>
      <CardTitle className="text-sm mb-3">Technologies:</CardTitle>
      <div className="flex flex-row gap-2">
        {technologies.map((technology) => (
          <img className="h-6" src={technology}></img>
        ))}
      </div>
    </div>
  );
};
