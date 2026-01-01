import { Facebook, Github, Globe, MoveRight, MoveUpRight, Twitter, X } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const ProjectsCard = () => {
  return <ProjectsHeader />;
};

export default ProjectsCard;

const ProjectCard = () => {
  return (
    <Card className="p-10">
      <div className="flex flex-row justify-between">
        <CardTitle className="text-xl">Aurx</CardTitle>
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
      <CardDescription>
        this is the description sir Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Laborum assumenda asperiores necessitatibus sunt vel
        culpa eum cupiditate dicta officia praesentium et, incidunt tempore
        minima. Rem repellendus velit tempore consectetur blanditiis aliquam
        culpa.
      </CardDescription>
      <CardTitle className="text-sm font-">Technologies:</CardTitle>
      <div className="flex flex-row">
        <Twitter></Twitter>
        <Facebook></Facebook>
      </div>
    </Card>
  );
};

const ProjectsHeader = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold my-5">My Projects</h1>
      <div className="grid grid-cols-2 w-full gap-5">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};
