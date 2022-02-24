import { Link } from "remix";
import { Post } from "~/post";
import { formatDate } from "~/utils";

interface IListPostsProps {
  posts: Post[];
}

const ListPosts = ({ posts }: IListPostsProps) => {
  return (
    <ul className="mt-12 flex flex-col gap-6">
      {posts.map((post) => (
        <li
          className="flex flex-col gap text-white/80  hover:text-white cursor-pointer duration-200"
          key={post.slug}
        >
          <Link to={post.slug} className="text-lg">
            {post.title}
          </Link>
          <span className="text-sm text-white/60">{formatDate(post.date)}</span>
        </li>
      ))}
    </ul>
  );
};

export default ListPosts;
