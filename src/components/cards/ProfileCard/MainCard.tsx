import { Card, CardDescription, CardFooter } from "@/components/ui/card";
import { ProfileHeader } from "./Header";
import { ProfileDescription } from "./Description";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { CardFooterMain } from "./Footer";

export const ProfileCard = () => {
  return (
    <Card className="w-full px-8 py-10">
      <ProfileHeader />

      <div className="flex flex-col items-center">
        <div className="h-32 w-36 bg-white float-right mb-5 rounded-lg" />
        <CardDescription className="p-0 font-extralight text-justify text-muted-foreground mb-5 text-[14px]">
          Hey I'm a 19 year old Full Stack Web Developer, with{" "}
          <span className="font-bold">4+ years of coding experience</span>. I
          help founders and teams transform ideas into{" "}
          <span className="font-bold">production-ready</span> digital products,
          building <span className="font-bold">high-performance</span> websites
          and scalable full-stack platforms with clean UX and rock-solid backend
          systems.
        </CardDescription>
        <CardFooterMain />
      </div>
    </Card>
  );
};

function ProfileImage({ image }: { image: string }) {
  return (
    <AspectRatio ratio={1 / 1} className="bg-muted rounded-lg">
      <Image
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        width={2}
        height={2}
        className="w-full h-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
      />
    </AspectRatio>
  );
}
