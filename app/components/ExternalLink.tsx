interface IExternalLinkProps {
  label: string | React.ReactNode;
  url: string;
}

const ExternalLink = ({ label, url }: IExternalLinkProps) => {
  return (
    <a href={url} target="_blank" rel="noopener" className="font-poppins">
      {label}
    </a>
  );
};

export default ExternalLink;
