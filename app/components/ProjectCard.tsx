import ExternalLink from "./ExternalLink";

interface IProjectCardProps {
  name: string;
  desc: string;
  logo: string;
  link: string;
  dev?: boolean;
}

const ProjectCard = ({
  name,
  desc,
  logo,
  link,
  dev = false,
}: IProjectCardProps) => {
  return (
    <ExternalLink
      url={link}
      label={
        <div className="w-full md:min-h-min h-100 rounded-xl hover:bg-darkBlue duration-300 flex flex-row justify-start items-start p-4 cursor-pointer opacity-60 hover:opacity-80">
          <img src={logo} alt={name} className="w-11 h-11 fill-white" />
          <div className="flex flex-col ml-4">
            <h4 className="font-poppins text-lg text-white">{name}</h4>
            <p className="font-poppins text-white text-xs">
              {desc}
              {dev ? (
                <span className="text-xs font-poppins text-purple ml-2">
                  ONGOING
                </span>
              ) : null}
            </p>
          </div>
        </div>
      }
    />
  );
};

export default ProjectCard;
