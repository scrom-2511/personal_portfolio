import { BackToProjects } from "@/components/project/BackToProjects"
import Features from "@/components/project/Features"
import { ProjectImage } from "@/components/project/ProjectImage"
import TimeAndStatus from "@/components/project/TimeAndStatus"
import TitleAndDescription from "@/components/project/TitleAndDescription"

const page = () => {
  return (
    <div className="w-full">
      <BackToProjects />
      <ProjectImage />
      <TitleAndDescription />
      <TimeAndStatus />
      <Features/>
    </div>
  )
}

export default page
