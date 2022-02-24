import { useLoaderData } from "remix";
import { useEffect, useState } from "react";

import { getPosts } from "~/post";
import type { Post } from "~/post";
import Heading from "~/components/Heading";
import ListPosts from "~/components/Post/ListPosts.client";

export const loader = async () => {
  return getPosts();
};

export default function Posts() {
  const [mounted, setMounted] = useState(false);
  const posts = useLoaderData<Post[]>();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className="mt-32">
      <Heading title="Blog" />
      {mounted ? <ListPosts posts={posts} /> : null}
    </div>
  );
}
