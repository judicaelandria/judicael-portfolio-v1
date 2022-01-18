import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction, LinksFunction } from "remix";
import styles from "./tailwind.css";
import {
  DESCRIPTION,
  DOMAINS,
  SOCIAL_IMAGE_URL,
  TITLE,
  TWITTER_DESCRIPTION,
} from "./constants";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap",
    },
  ];
};

export const meta: MetaFunction = () => {
  return {
    "og:locale": "en",
    "og:site_name": "Judicaël",
    "og:type": "website",
    "og:description": DESCRIPTION,
    "og:url": DOMAINS,
    "og:title": TITLE,
    "og:image": SOCIAL_IMAGE_URL,
    "twitter:card": "summary_large_image",
    "twitter:creator": "@judicael_andria",
    "twitter:site": "@judicael_andria",
    "twitter:description": TWITTER_DESCRIPTION,
    "twitter:image": SOCIAL_IMAGE_URL,
    "twitter:title": TITLE,
    "X-UA-Compatible": "IE=edge,chrome=1",
    author: "Judicaël",
    HandheldFriendly: "True",
    language: "en",
    pagename: "Judicaël",
    robots: "index, follow",
    title: TITLE,
    description: DESCRIPTION,
    viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
