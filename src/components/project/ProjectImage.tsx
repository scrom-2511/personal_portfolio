import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

export function ProjectImage({image}:{image:string}) {
  return (
    <div className="my-10">
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
        <Image
          src={image}
          alt="Photo by Drew Beamer"
          fill
          className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </AspectRatio>
    </div>
  );
}
