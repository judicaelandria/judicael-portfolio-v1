import { DESCRIPTION } from "~/constants";

const Hero = () => {
  return (
    <section className="w-full mt-28 flex flex-col gap-4 justify-center items-center">
      <h3 className="text-5xl text-white font-poppins font-semibold leading-relaxed text-center">
        Howdy, I'm Judicael
      </h3>
      <div className="mt-16">
        <h4 className="text-base text-white opacity-80 font-poppins leading-8">
          {DESCRIPTION}
        </h4>
        <h4 className="text-base text-white opacity-80 font-poppins leading-8 mt-8">
          I think this is the best way to learn for me. Sharing what you learn
          with the other people. I am a big fan of open source.
        </h4>
        <h4 className="text-base text-white opacity-80 font-poppins leading-8 mt-8">
          If I’m not coding, I am playing Dota or cooking(experimenting) some
          new things in the kitchen.
        </h4>
      </div>
    </section>
  );
};

export default Hero;
