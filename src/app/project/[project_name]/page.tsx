import { BackToProjects } from "@/components/project/BackToProjects";
import Features from "@/components/project/Features";
import TimeAndStatus from "@/components/project/TimeAndStatus";
import TitleAndDescription from "@/components/project/TitleAndDescription";
import { projects } from "@/projects";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    project_name: string;
  };
}

const Page = async ({ params }: PageProps) => {

  const {project_name} = await params;


  const project = projects.find(
    (project) => project.project_name === project_name
  );

  if (!project) {
    notFound(); // renders 404 page
  }

  return (
    <div className="w-full">
      <BackToProjects />
      <TitleAndDescription
        title={project.project_name}
        description={project.long_description}
      />
      <TimeAndStatus
        timeline={project.timeline}
        status={project.status}
      />
      <Features features={project.features} />
    </div>
  );
};

export default Page;
