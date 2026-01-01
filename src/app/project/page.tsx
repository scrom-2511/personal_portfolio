import { BackToProjects } from "@/components/project/BackToProjects"
import Features from "@/components/project/Features"
import { ProjectImage } from "@/components/project/ProjectImage"
import TitleAndDescription from "@/components/project/TitleAndDescription"

const page = () => {
  return (
    <div className="w-full">
      <BackToProjects />
      <ProjectImage />
      <TitleAndDescription />
      <Features/>
    </div>
  )
}

export default page
