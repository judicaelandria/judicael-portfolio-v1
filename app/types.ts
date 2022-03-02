export type IProject = {
  name: string;
  desc: string;
  logo: string;
  link: string;
  dev?: boolean;
};

export type IPost = {
  title: string;
  link: string;
};

export type PostType = {
  title: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  reading_time_minutes: number;
};
