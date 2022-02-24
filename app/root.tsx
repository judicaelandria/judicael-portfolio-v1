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
import globalStyles from "~/styles/global.css";
import { ErrorPage, SEO, Wrapper } from "./components";

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
    {
      rel: "stylesheet",
      href: globalStyles,
    },
  ];
};

export const meta: MetaFunction = () => SEO({ title: TITLE });

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <Meta />
        <Links />
      </head>
      <body className="bg-bgColor min-h-screen flex flex-col">
        <Wrapper>
          <Outlet />
        </Wrapper>
        <footer className="w-full mt-auto flex justify-center">
          <div className="max-w-2xl w-5/6 pt-20 py-4">
            <p className="font-poppins text-white text-sm opacity-60">
              Judicaël A. &copy; {new Date().getFullYear()}
            </p>
          </div>
        </footer>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

// export function ErrorBoundary() {
//   return (
//     <html>
//       <head>
//         <title>Oh no!</title>
//         <Meta />
//         <Links />
//       </head>
//       <body>
//         <ErrorPage />
//         <Scripts />
//       </body>
//     </html>
//   );
// }
