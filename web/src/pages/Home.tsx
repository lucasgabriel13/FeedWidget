import { useEffect } from "react";
import { Main } from "../components/Main";
import { Widget } from "../components/Widget";
import { ReactGA } from "../services/analytics";

export function Home() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <section className="max-w-[1550px] mx-auto">
      <Main />
      <Widget />
    </section>
  );
}
