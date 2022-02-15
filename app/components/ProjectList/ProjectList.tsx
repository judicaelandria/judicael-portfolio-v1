import { IProject } from "~/types";
import { HighlightedProject, ProjectCard } from "..";

interface IOnGoingProject extends IProject {
  tags: string[];
}

interface IProjectListProps {
  title: string;
  description: string;
  projects: IProject[];
  onGoing: IOnGoingProject;
}

const ProjectList = ({
  projects,
  title,
  onGoing,
  description,
}: IProjectListProps) => {
  return (
    <section className="w-full mt-24">
      <div className="mb-8">
        <h3 className="text-4xl font-poppins font-semibold text-white">
          {title}
        </h3>
        <h5 className="text-lg font-poppins text-white opacity-60 mt-2">
          {description}
        </h5>
      </div>
      <div className="flex flex-col gap-4">
        <HighlightedProject
          url={onGoing.link}
          title={onGoing.name}
          description={onGoing.desc}
          image={onGoing.logo}
          tags={onGoing.tags}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {projects.map((project, projectIdx) => (
            <ProjectCard
              name={project.name}
              desc={project.desc}
              logo={project.logo}
              link={project.link}
              dev={project.dev}
              key={projectIdx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
