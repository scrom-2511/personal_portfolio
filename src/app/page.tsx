import { ProfileCard } from "@/components/cards/ProfileCard/MainCard";
import ProjectsCard from "@/components/cards/ProjectsCard/MainCard";
import TopBar from "@/components/topBar/TopBar";

export default function Home() {
  return (
    <div>
      <ProfileCard />
      <ProjectsCard />
    </div>
  );
}
