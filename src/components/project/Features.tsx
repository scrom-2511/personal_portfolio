import { CardDescription, CardTitle } from "../ui/card";

const Features = ({features}:{features: Array<string>}) => {
  return (
    <div>
      <CardTitle className="mb-4 text-3xl">Features</CardTitle>
      {features.map((feature)=> <CardDescription>{feature}</CardDescription>)}
    </div>
  );
};

export default Features;
