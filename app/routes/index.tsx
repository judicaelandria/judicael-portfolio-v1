import { Hero, Link } from "~/Components";
import { Duplicate, ExternalLink } from "~/Icons";

export default function Index() {
  return (
    <div className="bg-black flex justify-center min-h-screen w-screen">
      <main className="relative z-10 w-full px-4 pt-10 mx-auto sm:max-w-screen-sm">
        <Hero />
        <section className="w-full mt-16">
          <h2 className="text-white text-2xl font-semibold mb-6">Projects</h2>
          <div className="w-full min-h-fit flex flex-row items-start p-3 md:p-7 bg-dark-grey rounded-xl">
            <div className="w-full flex flex-col">
              <h3 className="text-xl text-white font-medium leading-8 mb-2 font-poppins">
                create-rest-api
              </h3>
              <p className="text-lg text-white opacity-50 font-normal mb-2 font-poppins">
                A CLI tool to create a new rest api backend app very fast with
                ease.
              </p>
              <div className="w-80 h-11 bg-light-grey rounded-md p-2 flex flex-row justify-between items-center">
                <h4 className="text-sm text-white opacity-80 font-poppins">
                  npx create-rest-api
                </h4>
                <Duplicate />
              </div>
            </div>
            <Link
              url="https://github.com/create-rest-api"
              label={<ExternalLink />}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
