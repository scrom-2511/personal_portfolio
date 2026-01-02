import { ProfileCard } from "@/components/cards/ProfileCard/MainCard";
import ProjectsCard from "@/components/cards/ProjectsCard/MainCard";
import MotionWrapper from "@/components/motion/MotionWrapper";
import TopBar from "@/components/topBar/TopBar";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <MotionWrapper>
      <ProfileCard />
      <ProjectsCard />
    </MotionWrapper>
  );
}
