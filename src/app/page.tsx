import { ProfileCard } from "@/components/cards/ProfileCard/MainCard";
import ProjectsCard from "@/components/cards/ProjectsCard/MainCard";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-[#1c191a]">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center gap-5 py-10 bg-white dark:bg-[#1c191a] sm:items-start">
        <div className="flex flex-row gap-5">
          <a href="">
            <Github></Github>
          </a>
          <a href="">
            <Linkedin></Linkedin>
          </a>
          <a href="">
            <Twitter></Twitter>
          </a>
          <a href="">
            <Mail></Mail>
          </a>
        </div>
        <ProfileCard />
        <ProjectsCard />
      </main>
    </div>
  );
}
