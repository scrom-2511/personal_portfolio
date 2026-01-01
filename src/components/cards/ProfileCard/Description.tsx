import { CardContent } from "@/components/ui/card";
import { CardFooterMain } from "./Footer";

export const ProfileDescription = () => {
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