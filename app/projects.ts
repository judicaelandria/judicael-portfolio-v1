import { IProject } from "./types";

const projects: IProject[] = [
  {
    title: "create-api-rest",
    description: "A command line tool to create a backend api with node",
    logo: "/projectLogo/logo-terminal.svg",
    url: "https://github.com/judicaelandria/create-api-rest",
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
