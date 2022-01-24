import { useLayoutEffect, useState, useRef } from "react";
import Logo from "~/assets/logo.svg";
import { EMAIL, GITHUB_URL, TWITTER_URL } from "~/constants";
import ExternalLink from "./ExternalLink";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const scrollRef = useRef(window.scrollY);
  // whenever the component re-render
  scrollRef.current = window.scrollY;

  useLayoutEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY);
    });
    return () =>
      window.removeEventListener("scroll", () =>
        setScrollPosition(window.scrollY)
      );
  }, []);

  return (
    <header
      className={`w-full h-24 fixed top-0 left-0 flex justify-center bg-bgColor duration-150 ${
        scrollPosition || scrollRef.current > 40
          ? "backdrop-blur-sm bg-bgColor/40"
          : ""
      }`}
    >
      <nav className="max-w-2xl w-5/6 flex flex-row justify-between items-center">
        <img src={Logo} alt="Judicael logo" />
        <ul className="list-none flex flex-row">
          <li className="text-sm md:text-base font-poppins text-white mr-6 cursor-pointer">
            <ExternalLink label="Twitter" url={TWITTER_URL} />
          </li>
          <li className="text-sm md:text-base font-poppins text-white mr-6 cursor-pointer">
            <ExternalLink label="Github" url={GITHUB_URL} />
          </li>
          <li className="text-sm md:text-base font-poppins text-purple cursor-pointer">
            <ExternalLink label="Say hi!" url={`mailto:${EMAIL}`} />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
