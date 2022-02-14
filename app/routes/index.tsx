import { useState, useEffect } from "react";
import { useLoaderData } from "remix";
import { Hero, LatestProject, Navbar } from "~/components";
import ErrorBoundary from "~/components/ErrorBoundary/ErrorBoundary";
import { getProjects } from "~/projects";
import { IProject } from "~/types";

export function loader() {
  return getProjects();
}

<ErrorBoundary />;

export default function Index() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects: IProject[] = useLoaderData();
  return (
    <main className="w-full min-h-screen bg-bgColor flex justify-center">
      <section className="max-w-2xl w-5/6">
        {mounted ? <Navbar /> : null}
        <article>
          <Hero />
          <LatestProject />
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
