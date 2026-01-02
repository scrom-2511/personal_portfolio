enum ProjectTechnologies {
    Ts,
    Js,
    React,
    NextJs,
  }
  interface Project {
    projectName: string;
    description: string;
    technologies: Array<ProjectTechnologies>;
  }