import { useEffect, useState } from "react";
import { Navbar } from "..";

interface IWrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: IWrapperProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <article className="w-full flex justify-center">
      <main className="max-w-2xl w-5/6">
        {mounted ? <Navbar /> : null}
        <section className="mt-28">{children}</section>
      </main>
    </article>
  );
};

export default Wrapper;
