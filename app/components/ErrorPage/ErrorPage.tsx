const ErrorPage = () => {
  return (
    <section className="w-full min-h-screen bg-bgColor flex flex-col justify-center items-center gap-3">
      <h3 className="text-2xl text-white font-medium">
        Oh no :(, sorry about that!
      </h3>
      <h4 className="text-base text-white/80">
        We're actually facing an error, reload the page please
      </h4>
    </section>
  );
};
export default ErrorPage;
