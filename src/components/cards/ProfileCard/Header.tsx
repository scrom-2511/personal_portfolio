import { Button } from "@/components/ui/button";
import { CardAction, CardHeader, CardTitle } from "@/components/ui/card";

export const ProfileHeader = () => {
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