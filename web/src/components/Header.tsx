import logoImg from "../assets/logo.svg";
import { useAuth } from "../hook/useAuth";
import { ToggleButton } from "./ToggleButton";

export function Header() {
  const { user, signWithGoogle } = useAuth();

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
            <a
              href="#"
              className="hover:text-brand-500 dark:hover:text-brand-500 dark:text-zinc-100 text-zinc-900 text-xl transition-colors"
            >
              Dashboard
            </a>
            <img
              src={user?.avatarURL}
              alt={`imagem do perfil de ${user.name}`}
              className="rounded-full w-10 h-10"
            />
          </>
        ) : (
          <button
            className="bg-brand-500 w-20 h-10 rounded-md text-zinc-100 text-md hover:bg-brand-300 transition-colors"
            onClick={signWithGoogle}
          >
            Entrar
          </button>
        )}
      </div>
    </header>
  );
}
