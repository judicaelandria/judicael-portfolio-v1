import { MetaFunction } from "remix";
import { formatDate } from "~/utils";
import { SEO } from "..";
import Heading from "../Heading";
interface IPostProps {
  title: string;
  content: string;
  date: string;
}

let title = "";
export const meta: MetaFunction = () => SEO({ title });

const Post = ({ title, content, date }: IPostProps) => {
  title = title;
  return (
    <div className="flex flex-col gap-8">
      <Heading title={title} />
      <h4 className="text-base text-white/60">{formatDate(date)}</h4>
      <div
        className="text-base text-white"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default Post;
