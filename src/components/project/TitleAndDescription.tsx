import { CardDescription, CardTitle } from "../ui/card";

const TitleAndDescription = ({title, description}:{title: string, description: string}) => {
  return (
    <div>
      <CardTitle className="text-3xl">{title}</CardTitle>
      <CardDescription className="mt-4">{description}</CardDescription>
    </div>
  );
};

export default TitleAndDescription;
