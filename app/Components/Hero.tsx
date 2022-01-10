import { EMAIL, GITHUB_URL, TWITTER_URL } from "~/constants";
import Link from "./Link";

const Hero = () => {
  return (
    <>
      <section className="w-full flex flex-row justify-between items-center">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          className="w-12 h-12 rounded-full"
        />
        <ul className="flex flex-row items-baseline list-none">
          <li className="text-base text-white opacity-75 hover:opacity-100 ease-in duration-75">
            <Link url={TWITTER_URL} label="Twitter" />
          </li>
          <li className="text-base text-white ml-6 opacity-75 hover:opacity-100 ease-in duration-75">
            <Link url={GITHUB_URL} label="Github" />
          </li>
          <li className="text-base text-white ml-6 opacity-75 hover:opacity-100 ease-in duration-75">
            <Link url={EMAIL} label="Contact" />
          </li>
        </ul>
      </section>
      <section className="w-full flex flex-col justify-center mt-20">
        <h3 className="text-white font-semibold text-4xl mb-3 text-center font-poppins">
          Howdy 🤗, I'm <span className="text-purple-400">Judicaël</span>.
        </h3>
        <h4 className="text-white opacity-60 text-left mt-10 leading-8 text-lg font-poppins">
          Welcome to my digital garden, this is the place where I share some of
          side projects. I love building and experimenting things to learn more
          about the web and mobile. I think this is the best way to learn for
          me.
        </h4>
        <h4 className="text-white opacity-60 text-left mt-4 leading-8 text-lg font-poppins">
          I think this is the best way to learn for me. Sharing what you learn
          with the other people. I am a big fan of open source.
        </h4>
        <h4 className="text-white opacity-60 text-left mt-4 leading-8 text-lg font-poppins">
          If you don't find me coding, I am playing Dota or
          cooking(experimenting) some new things in the kitchen.
        </h4>
      </section>
    </>
  );
};

export default Hero;
