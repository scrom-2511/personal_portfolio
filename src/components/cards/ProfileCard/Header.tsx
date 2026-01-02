import { Button } from "@/components/ui/button";
import { CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const ProfileHeader = () => {
  return (
    <CardHeader className="gap-0 p-0">
      <div className="flex items-center justify-between">
        <div>
          <CardTitle className="p-0 text-xl">ANURAG</CardTitle>
          <CardDescription>a.k.a scrom</CardDescription>
        </div>
        <CardAction>
          <Button variant="outline" size={"sm"} className="text-[10px]">
            <div className="mr-1 h-2.5 w-2.5 rounded-full bg-green-400" />
            Open To Work
          </Button>
        </CardAction>
      </div>
    </CardHeader>
  );
};
