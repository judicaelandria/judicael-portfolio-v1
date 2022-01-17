import { IProject } from "./types";

const projects: IProject[] = [
  {
    title: "create-rest-api",
    description: "A command line tool to create a backend api with node",
    logo: "/projectLogo/logo-terminal.svg",
    url: "https://github.com/judicaelandria/create-rest-api",
  },
  {
    title: "Bookshelf",
    description: "Mobile application to manage the books in a library",
    logo: "/projectLogo/bookshelf.svg",
    url: "https://github.com/judicaelandria/library-app",
  },
];

export const getProjects = (): IProject[] => {
  return projects;
};
