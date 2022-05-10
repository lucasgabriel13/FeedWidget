import { Activity, GoogleLogo, Graph, HouseSimple } from "phosphor-react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../assets/logo.svg";
import { useAuth } from "../hook/useAuth";
import { ToggleButton } from "./ToggleButton";

export function Header() {
  const { user, signWithGoogle } = useAuth();
  const location = useLocation();

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
        {user ? (
          <>
            {location.pathname === "/dashboard" ? (
              <a
                href="/"
                className="hover:text-brand-500 dark:hover:text-brand-500 dark:text-zinc-100 text-zinc-900 text-xl transition-colors"
              >
                <HouseSimple size={25} />
              </a>
            ) : (
              <a
                href="/dashboard"
                className="hover:text-brand-500 dark:hover:text-brand-500 dark:text-zinc-100 text-zinc-900 text-xl transition-colors"
              >
                <Activity size={25} />
              </a>
            )}

            <img
              src={user?.avatarURL}
              alt={`imagem do perfil de ${user.name}`}
              className="rounded-full w-10 h-10"
            />
          </>
        ) : (
          <button
            className="flex items-center justify-center gap-2 bg-brand-500 w-24 h-10 rounded-md text-zinc-100 text-md hover:bg-brand-300 transition-colors"
            onClick={signWithGoogle}
          >
            <GoogleLogo size={20} weight="bold" className="hover:animate-pulse" /> <span className="border-l-2 pl-2">Entrar</span>
          </button>
        )}
      </div>
    </header>
  );
}
