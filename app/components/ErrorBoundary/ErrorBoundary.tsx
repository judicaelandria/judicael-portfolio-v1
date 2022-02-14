import { Links, Meta, Scripts } from "remix";

const ErrorBoundaryPage = () => {
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        {/* add the UI you want your users to see */}
        <section className="w-full min-h-screen bg-bgColor flex flex-col justify-center items-center gap-3">
          <h3 className="text-2xl text-white font-medium">
            Oh no :(, sorry about that!
          </h3>
          <h4 className="text-base text-white/80">
            We're actually facing an error, reload the page please
          </h4>
        </section>
        <Scripts />
      </body>
    </html>
  );
};

export default ErrorBoundaryPage;
