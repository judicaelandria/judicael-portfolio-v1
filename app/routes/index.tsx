import { useLoaderData } from "remix";
import { Hero, HighlightedProject, Navbar, ProjectCard } from "~/components";
import { getProjects } from "~/projects";
import { IProject } from "~/types";

export function loader() {
  return getProjects();
}

export default function Index() {
  const projects: IProject[] = useLoaderData();
  return (
    <main className="w-full min-h-screen bg-bgColor flex justify-center">
      <section className="max-w-2xl w-5/6">
        <Navbar />
        <article>
          <Hero />
          <section className="w-full mt-24">
            <div className="mb-8">
              <h3 className="text-4xl font-poppins font-semibold text-white">
                Projects
              </h3>
              <h5 className="text-lg font-poppins text-white opacity-60 mt-2">
                Lists of projects that I'm proud of.
              </h5>
            </div>
            <div className="flex flex-col gap-4">
              <HighlightedProject
                url="https://github.com/judicaelandria/lilslide"
                title="lilslide"
                description="This is a lil web application to make slide very easily and with a very
                intuitive interface."
                image="/lilslide.png"
                tags={["wip"]}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {projects.map((project, projectIdx) => (
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    logo={project.logo}
                    url={project.url}
                    key={projectIdx}
                  />
                ))}
              </div>
            </div>
          </section>
        </article>
        <footer className="mt-32 mb-9">
          <p className="font-poppins text-white text-sm opacity-60">
            Judicaël A. &copy; {new Date().getFullYear()}
          </p>
        </footer>
      </section>
    </main>
  );
}
