import Logo from "~/assets/logo.svg";
import { EMAIL, GITHUB_URL, TWITTER_URL } from "~/constants";
import ExternalLink from "./ExternalLink";

const Navbar = () => {
  return (
    <header className="w-full mt-8">
      <nav className="w-full flex flex-row justify-between items-center">
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
