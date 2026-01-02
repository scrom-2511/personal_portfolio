import { Card, CardDescription, CardFooter } from "@/components/ui/card";
import { ProfileHeader } from "./Header";
import { CardFooterMain } from "./Footer";

export const ProfileCard = () => {
  return (
    <Card className="w-full px-8 py-10">
      <ProfileHeader />

      <div className="flex flex-col items-center">
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