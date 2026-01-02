import { Status } from "@/types";
import { Button } from "../ui/button";
import { CardDescription, CardTitle } from "../ui/card";

const TimeAndStatus = ({timeline, status}:{timeline: string, status:Status}) => {
  return (
    <div className="grid grid-cols-2 w-full gap-5 py-8">
      <Button variant={"outline"} className="flex flex-col items-center justify-center h-20">
        <CardTitle>Timeline</CardTitle>
        <CardDescription>2 months</CardDescription>
      </Button>
      <Button variant={"outline"} className="flex flex-col items-center justify-center h-20">
        <CardTitle>Status</CardTitle>
        <CardDescription>Completed</CardDescription>
      </Button>
    </div>
  );
};

export default TimeAndStatus;
