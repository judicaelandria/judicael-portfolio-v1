import {
  DESCRIPTION,
  DOMAINS,
  SOCIAL_IMAGE_URL,
  TITLE,
  TWITTER_DESCRIPTION,
} from "~/constants";

interface ISEOProps {
  title?: string;
}

const SEO = ({ title = TITLE }: ISEOProps) => {
  return {
    "og:locale": "en",
    "og:site_name": "Judicaël",
    "og:type": "website",
    "og:description": DESCRIPTION,
    "og:url": DOMAINS,
    "og:title": title,
    "og:image": SOCIAL_IMAGE_URL,
    "twitter:card": "summary_large_image",
    "twitter:creator": "@judicael_andria",
    "twitter:site": "@judicael_andria",
    "twitter:description": TWITTER_DESCRIPTION,
    "twitter:image": SOCIAL_IMAGE_URL,
    "twitter:title": title,
    "X-UA-Compatible": "IE=edge,chrome=1",
    author: "Judicaël",
    HandheldFriendly: "True",
    language: "en",
    pagename: "Judicaël",
    robots: "index, follow",
    title: title,
    description: DESCRIPTION,
    viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  };
};

export default SEO;
