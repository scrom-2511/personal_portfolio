import { Project, ProjectTechnologies, Status } from "./types";

export const projects: Project[] = [
    {
      project_name: "Aurx",
      project_image: "aurx.png",
      short_description: "A modern web app built with TypeScript and React.",
      long_description:
        "Aurx is a sleek, responsive web application designed to provide seamless user experiences with real-time data handling and interactive UI components.",
      technologies: [ProjectTechnologies.TS, ProjectTechnologies.REACT],
      features: [
        "Responsive design for all devices",
        "Interactive dashboards and charts",
        "User authentication and profile management",
        "Dark/light mode toggle",
      ],
      timeline: "Jan 2023 - Mar 2023",
      status: Status.Completed,
    },
    {
      project_name: "ShopSphere",
      project_image: "shopsphere.png",
      short_description:
        "E-commerce platform with Node.js, PostgreSQL, and Prisma.",
      long_description:
        "ShopSphere is a full-featured e-commerce platform allowing users to browse products, manage carts, process payments, and track orders, all backed by a robust Node.js API and PostgreSQL database.",
      technologies: [
        ProjectTechnologies.NODE,
        ProjectTechnologies.EXPRESS,
        ProjectTechnologies.POSTGRES,
        ProjectTechnologies.PRISMA,
        ProjectTechnologies.REACT,
        ProjectTechnologies.TS,
      ],
      features: [
        "User registration and login",
        "Product catalog with filtering and search",
        "Shopping cart and checkout system",
        "Order history and tracking",
        "Admin dashboard for product management",
      ],
      timeline: "Apr 2023 - Sep 2023",
      status: Status.Working,
    },
  ];