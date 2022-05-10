import logoImg from "../assets/logo.svg";
import { ToggleButton } from "./ToggleButton";

export function Header() {
  return (
    <header className="flex items-center justify-between w-full h-20 lg:px-[169px] px-4">
      <div className="flex items-center gap-3">
        <img
          className="w-[50px] h-[50px]"
          src={logoImg}
          alt="Logo do FeedWidget"
        />
        <h1 className="dark:text-zinc-100 text-zinc-900 text-xl">FeedWidget</h1>
      </div>
      <div className="flex items-center gap-5">
        <ToggleButton />
        <button className="bg-brand-500 w-20 h-10 rounded-md text-zinc-100 text-md hover:bg-brand-300 transition-colors">
          Entrar
        </button>
      </div>
    </header>
  );
}
