interface IHeadingProps {
  title: string;
}

const Heading = ({ title }: IHeadingProps) => {
  return (
    <h3 className="text-4xl font-poppins font-semibold text-white">{title}</h3>
  );
};

export default Heading;
