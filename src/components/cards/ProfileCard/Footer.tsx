import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { Code, MapPin } from "lucide-react";

export const CardFooterMain = () => {
  return (
    <CardFooter className="p-0 gap-5">
      <Button variant="outline" className="h-8 text-[12px]">
        <MapPin size={0.5} color="red"></MapPin>
        India, Remote
      </Button>
      <Button variant="outline" className="h-8 text-[12px]">
        <Code size={0.5} color="#0074bd"></Code>
        End to End Applications
      </Button>
    </CardFooter>
  );
}