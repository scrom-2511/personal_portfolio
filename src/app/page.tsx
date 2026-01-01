import { Code, Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProjectsCard from "@/components/cards/ProjectsCard";

function ProfileHeader() {
  return (
    <CardHeader className="gap-0">
      <div className="flex items-center justify-between">
        <CardTitle className="p-0 text-2xl">
          ANURAG{" "}
          <span className="text-sm font-light text-muted-foreground">
            aka something
          </span>
        </CardTitle>

        <CardAction>
          <Button variant="outline">
            <div className="mr-1 h-2.5 w-2.5 rounded-full bg-green-400" />
            Open To Work
          </Button>
        </CardAction>
      </div>
    </CardHeader>
  );
}

function ProfileDescription() {
  return (
    <div className="flex flex-col justify-between h-36">
      <CardContent className="min-w-0 flex-1 p-0 font-extralight text-muted-foreground mb-5 text-[14px]">
        Hey I'm a 19 year old Full Stack Web Developer, with{" "}
        <span className="font-bold">4+ years of coding experience</span>. I help
        founders and teams transform ideas into{" "}
        <span className="font-bold">production-ready</span> digital products,
        building <span className="font-bold">high-performance</span> websites
        and scalable full-stack platforms with clean UX and rock-solid backend
        systems.
      </CardContent>
      <CardFooterMain/>
    </div>
  );
}

function SideBox() {
  return <div className="h-36 min-w-36 shrink-0 rounded-2xl bg-white" />;
}

function ProfileCard() {
  return (
    <Card className="w-full px-5 py-10">
      <ProfileHeader />

      <div className="flex w-full items-start gap-10 px-6">
        <ProfileDescription />
        <SideBox />
      </div>
    </Card>
  );
}

function CardFooterMain() {
  return (
    <CardFooter className="p-0 gap-5">
      <Button variant="outline" className="h-8 text-[12px]">
        <MapPin size={0.5} color="red"></MapPin>
        Remote
      </Button>
      <Button variant="outline" className="h-8 text-[12px]">
        <Code size={0.5} color="#0074bd"></Code>
        End to End Applications
      </Button>
    </CardFooter>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-[#1c191a]">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center gap-5 py-32 bg-white dark:bg-[#1c191a] sm:items-start">
        <ProfileCard />
        <ProjectsCard/>
      </main>
    </div>
  );
}
