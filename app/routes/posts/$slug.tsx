import { LinksFunction, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";

import { getPost } from "~/post";
import { useEffect, useState } from "react";
import Post from "~/components/Post/Post.client";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expected params.slug");
  return getPost(params.slug);
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/default.min.css",
    },
  ];
};

export default function PostSlug() {
  const [mounted, setMounted] = useState(false);
  const post = useLoaderData();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="mt-32">
      {mounted ? (
        <Post title={post.title} date={post.date} content={post.html} />
      ) : null}
    </div>
  );
}
