import { Headers } from "node-fetch";
import { useEffect, useState } from "react";
import { IPost, PostType } from "~/types";
import Post from "./Post";

const ListPosts = () => {
  const [articles, setArticles] = useState<PostType[]>();
  useEffect(() => {
    async function fetchArtices() {
      const allArticles = await fetch(
        "https://dev.to/api/articles?username=judionit"
      );
      setArticles(await allArticles.json());
    }
    fetchArtices();
  }, []);

  return (
    <section className="w-full mt-24">
      <div className="mb-8">
        <h3 className="text-4xl font-poppins font-semibold text-white">
          Blogs
        </h3>
      </div>
      <div className="flex flex-col gap-4">
        {articles?.map((article, postIdx) => (
          <Post {...article} key={postIdx} />
        ))}
      </div>
    </section>
  );
};
export default ListPosts;
