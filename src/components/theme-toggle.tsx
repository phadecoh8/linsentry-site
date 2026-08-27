"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return true;

    return localStorage.getItem("linsentry-theme") !== "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  function toggle() {
    const next = !dark;
    setDark(next);
    localStorage.setItem("linsentry-theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  }

  return <button onClick={toggle} className="grid size-9 place-items-center rounded-md text-black transition hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white" aria-label="Toggle color theme">{dark ? "☀" : "☾"}</button>;
}
