import { Card } from "@/components/ui/card";
import { ProfileHeader } from "./Header";
import { ProfileDescription } from "./Description";

export const ProfileCard = () => {
  return (
    <Card className="w-full px-5 py-10">
      <ProfileHeader />

      <div className="flex w-full items-start gap-10 px-6">
        <ProfileDescription />
        <div className="h-36 min-w-36 shrink-0 rounded-2xl bg-white" />
      </div>
    </Card>
  );
}