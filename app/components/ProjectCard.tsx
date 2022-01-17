import { Link } from "remix";
import ExternalLink from "./ExternalLink";

interface IProjectCardProps {
  title: string;
  description: string;
  logo: string;
  url: string;
}

const ProjectCard = ({ title, description, logo, url }: IProjectCardProps) => {
  return (
    <ExternalLink
      url={url}
      label={
        <div className="w-full md:min-h-min h-100 bg-bgColor rounded-xl hover:bg-black duration-300 flex flex-row justify-start items-start p-4 cursor-pointer opacity-60 hover:opacity-80">
          <img src={logo} alt={title} className="w-11 h-11 fill-white" />
          <div className="flex flex-col ml-4">
            <h4 className="font-poppins text-lg text-white">{title}</h4>
            <p className="font-poppins text-white text-xs">{description}</p>
          </div>
        </div>
      }
    />
  );
};

export default ProjectCard;
