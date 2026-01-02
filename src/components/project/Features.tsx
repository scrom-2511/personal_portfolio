import { CardDescription, CardTitle } from "../ui/card";

const Features = ({features}:{features: Array<string>}) => {
  return (
    <div>
      <CardTitle className="mb-4 text-2xl">Features</CardTitle>
      {features.map((feature)=> <CardDescription className="mb-2"><span className="font-black">•</span> {feature}</CardDescription>)}
    </div>
  );
};

export default Features;
