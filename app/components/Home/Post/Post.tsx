import CommentIcon from "~/assets/CommentIcon";
import HeartIcon from "~/assets/HeartIcon";
import { ExternalLink } from "~/components";
import { PostType } from "~/types";

const Post = (article: PostType) => {
  return (
    <ExternalLink
      url={article.url}
      label={
        <div className="w-full md:min-h-min h-14 flex flex-row justify-start items-start p-2 cursor-pointer opacity-60 hover:opacity-80">
          <div className="flex flex-col ml-4">
            <h4 className="font-poppins text-lg text-white">{article.title}</h4>
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-row gap-1 text-white/80">
                <span className="text-xs">
                  {article.public_reactions_count}
                </span>
                <HeartIcon />
              </div>
              <div className="flex flex-row gap-1 text-white/80">
                <span className="text-xs">{article.comments_count}</span>
                <CommentIcon />
              </div>
              <p className="text-white/80 text-xs">
                - {article.reading_time_minutes} min
              </p>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Post;
