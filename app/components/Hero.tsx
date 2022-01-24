import { DESCRIPTION, GITHUB_URL } from "~/constants";
import ExternalLink from "./ExternalLink";

const Hero = () => {
  return (
    <section className="w-full mt-28 flex flex-col gap-4 justify-center items-center">
      <h3 className="text-5xl text-white font-poppins font-semibold leading-relaxed text-center">
        Howdy, I'm <span className="">Judicael</span>
      </h3>
      <div className="mt-16">
        <h4 className="text-base text-white/80 font-poppins leading-8">
          {DESCRIPTION}
        </h4>
        <h4 className="text-base text-white/80 font-poppins leading-8 mt-8">
          I am a big fan of open source. I contributed to open source project
          like Gatsbyjs, Abelljs, etc. I created some open source project, you
          can find some of them in the projects section (or visit my{" "}
          {
            <ExternalLink
              label={
                <span className="text-purple/80 hover:opacity-100 duration-300 font-poppins italic">
                  Github profile
                </span>
              }
              url={GITHUB_URL}
            />
          }
          ).
        </h4>
        <h4 className="text-base text-white/80 font-poppins leading-8 mt-8">
          If I’m not coding, I am playing Dota or cooking(experimenting) some
          new things in the kitchen. If you happen to be in the same city I live
          (currently in Antananarivo MDG), maybe we can hang out and take some
          photos or code together.
        </h4>
      </div>
    </section>
  );
};

export default Hero;
