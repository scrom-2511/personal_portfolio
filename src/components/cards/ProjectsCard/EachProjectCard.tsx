"use client";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Project, ProjectTechnologies } from "@/types";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Facebook, Github, MoveUpRight, Twitter } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export const EachProjectCard = ({
  project,
  redirect_string,
}: {
  project: Project;
  redirect_string: string;
}) => {
  const router = useRouter();
  const handleOnClick = () => {
    router.push(redirect_string);
  };
  return (
    <motion.div
      whileHover={{
        scale:1.05,
        boxShadow: "0px 25px 50px rgba(0,0,0,0.25)",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 18,
      }}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
        cursor: "pointer"
      }}
    >
      <Card className="p-8" onClick={handleOnClick}>
        <div className="flex flex-row justify-between">
          <CardTitle className="text-xl">{project.project_name}</CardTitle>
          <div className="flex flex-row items-center gap-3">
            <motion.a
            whileHover={{scale:1.3}}
            href="somethign">
              <Github size={20}></Github>
            </motion.a>
            <motion.a
            whileHover={{scale:1.3}}
            href="somethign">
              <MoveUpRight></MoveUpRight>
            </motion.a>
          </div>
        </div>
        <ProjectImage image="" />
        <CardDescription>{project.short_description}</CardDescription>
        <Technologies technologies={project.technologies} />
      </Card>
    </motion.div>
  );
};

const Technologies = ({
  technologies,
}: {
  technologies: Array<ProjectTechnologies>;
}) => {
  return (
    <div>
      <CardTitle className="text-sm mb-3">Technologies:</CardTitle>
      <div className="flex flex-row gap-2">
        {technologies.map((technology) => (
          <img className="h-6" src={technology}></img>
        ))}
      </div>
    </div>
  );
};

function ProjectImage({ image }: { image: string }) {
  return (
    <div>
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
        <Image
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          fill
          className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </AspectRatio>
    </div>
  );
}
