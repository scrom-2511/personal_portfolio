import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const TopBar = () => {
  return (
    <div className="flex flex-row gap-5 mb-6">
      <a href="">
        <Github></Github>
      </a>
      <a href="">
        <Linkedin></Linkedin>
      </a>
      <a href="">
        <Twitter></Twitter>
      </a>
      <a href="">
        <Mail></Mail>
      </a>
    </div>
  );
};

export default TopBar;
