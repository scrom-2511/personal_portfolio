import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Facebook, Github, MoveUpRight, Twitter } from "lucide-react";

export const EachProjectCard = () => {
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