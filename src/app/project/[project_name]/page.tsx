import MotionWrapper from "@/components/motion/MotionWrapper";
import { BackToProjects } from "@/components/project/BackToProjects";
import Features from "@/components/project/Features";
import { ProjectImage } from "@/components/project/ProjectImage";
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
    <MotionWrapper>
      <div className="w-full">
      <BackToProjects />
      <ProjectImage image={project.project_image}/>
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
    </MotionWrapper>
  );
};

export default Page;
