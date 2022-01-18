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
import { DESCRIPTION, DOMAINS, TITLE } from "./constants";

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
  return { title: "Judicael - Designer, developer" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:url" content={DOMAINS} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta name="author" content="Judicael" />
        <meta name="image" property="og:image" content="/social.png" />
        <meta name="twitter:creator" content="@judicael_andria" />
        <meta name="twitter:site" content={DOMAINS} />
        <meta name="twitter:image" content="/social.png" />
        <meta name="twitter:description" content={DESCRIPTION} />
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
