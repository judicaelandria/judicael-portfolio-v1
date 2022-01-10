interface ILinkProps {
  url: string;
  label: string | React.ReactNode;
}

const Link = ({ url, label }: ILinkProps) => {
  return (
    <a href={url} target="_blank" rel="noopener" className="font-poppins">
      {label}
    </a>
  );
};

export default Link;
