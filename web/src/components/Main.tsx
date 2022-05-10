import { ArrowFatLinesDown } from "phosphor-react";
import bgImg from "../assets/background-image.svg";
import logoImg from "../assets/logo.svg";

export function Main() {
  return (
    <main className="flex items-center lg:mt-0 lg:px-0 sm:mt-20 sm:px-10">
      <img
        className="w-0 lg:w-auto lg:mt-[-120px] 2xl:mt-0"
        src={bgImg}
        alt="Circulo grande roxo com um "
      />
      <div className="dark:text-zinc-100 text-zinc-900 text-xl md:mr-6 md:mt-[-150px] max-w-[412px] 2xl:ml-48">
        <div className="flex items-center gap-5 h-20">
          <img
            className="mb-8 w-20 h-20"
            src={logoImg}
            alt="Logo da FeedWidget"
          />
          <h1 className="dark:text-zinc-100 text-zinc-900 text-3xl mb-[30px]">
            FeedWidget
          </h1>
        </div>
        <p className="mb-4">
          Que tal possuir um Widget de Feedback em seu site?
        </p>
        <p>
          E ainda receber todos os Feedbacks no seu e-mail e uma Dashboard
          lindona para acompanhar o engajamento do seu site!
        </p>
      </div>
    </main>
  );
}
