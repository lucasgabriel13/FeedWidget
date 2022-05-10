import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Widget } from "../components/Widget";

export function Home() {
  return (
    <section className="max-w-[1550px] mx-auto">
      <Main />
      <Widget />
    </section>
  );
}
