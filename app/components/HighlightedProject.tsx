import ExternalLink from "./ExternalLink";

interface IHighlightedProjectProps {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  url: string;
}

const HighlightedProject = ({
  title,
  description,
  image,
  tags,
  url,
}: IHighlightedProjectProps) => {
  return (
    <ExternalLink
      url={url}
      label={
        <div className="w-full gap-2 h-auto md:h-64 flex flex-col-reverse md:flex-row justify-between items-center md:p-8 bg-dark rounded-xl">
          <div className="flex flex-col p-8 md:p-0">
            <h4 className="text-white opacity-80 text-xl font-semibold font-poppins">
              {title}
            </h4>
            <p className="text-base font-poppins text-white opacity-60 mt-4">
              {description}
            </p>
            <div className="flex flex-row gap-2 mt-2">
              {tags?.map((tag) => (
                <span
                  className="min-w-min p-2 px-3 bg-bgColor rounded-2xl text-white"
                  key={tag}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <img
            src={image}
            alt="lilslide"
            className="w-full md:w-72 h-48 rounded-t-xl md:rounded-xl"
          />
        </div>
      }
    />
  );
};

export default HighlightedProject;
