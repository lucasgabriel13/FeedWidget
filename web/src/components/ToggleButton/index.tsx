import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";

export function ToggleButton() {
  const [theme, setTheme] = useState(() => {
    const theme = localStorage.getItem("theme");

    if (theme) return theme;

    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  function handleChangeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <Switch
      checked={theme === "dark" && true}
      onChange={handleChangeTheme}
      className={`${
        theme === "dark" ? "bg-zinc-600" : "bg-zinc-300"
      } relative inline-flex h-6 w-11 items-center rounded-full transition-transform`}
    >
      <span className="sr-only">Habilitar tema escuro</span>
      <span
        className={`${
          theme === "dark"
            ? "translate-x-6 bg-[url(/src/assets/sun.svg)]"
            : "translate-x-1 bg-[url(/src/assets/moon2.svg)]"
        } inline-block h-4 w-4 transform rounded-full  transition-transform`}
      />
    </Switch>
  );
}
