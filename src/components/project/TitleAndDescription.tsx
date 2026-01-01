import { CardDescription, CardTitle } from "../ui/card";

const TitleAndDescription = () => {
  return (
    <div>
      <CardTitle className="text-3xl">Project Name</CardTitle>
      <CardDescription className="my-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae rerum ex
        debitis architecto commodi inventore, minus doloremque officia
        repellendus aut perferendis quidem nam optio blanditiis eveniet eum
        voluptas odit reprehenderit veritatis obcaecati!
      </CardDescription>
    </div>
  );
};

export default TitleAndDescription;
