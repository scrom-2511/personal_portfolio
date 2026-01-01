import { EachProjectCard } from "./EachProjectCard";

export const ProjectsContainer = () => {
  return (
    <div>
      <div className="grid grid-cols-2 w-full gap-5">
        <EachProjectCard />
        <EachProjectCard />
        <EachProjectCard />
        <EachProjectCard />
      </div>
    </div>
  );
};