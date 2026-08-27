"use client";

import Link from "next/link";
import { useState } from "react";
import { DocSearch } from "./doc-search";
import { GitHubIcon } from "./icons";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";

const links = [
  ["Documentation", "/docs"],
  ["Blog", "/blog"],
  ["Changelog", "/changelog"],
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white text-black backdrop-blur transition-colors dark:border-zinc-800/80 dark:bg-zinc-950/90 dark:text-white">
    <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
      <Logo />
      <div className="hidden items-center gap-5 text-sm md:flex">{links.map(([label, href]) => <Link className="transition hover:text-zinc-600 dark:hover:text-zinc-300" href={href} key={href}>{label}</Link>)}</div>
      <div className="flex items-center gap-1 sm:gap-3">
        <DocSearch />
        <a href="https://github.com/phadecoh8/LinSentry" target="_blank" rel="noreferrer" className="grid size-9 place-items-center rounded-md text-black transition hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800" aria-label="LinSentry Open Source Code"><GitHubIcon className="size-[18px]" /></a>
        <ThemeToggle />
        <button onClick={() => setMenuOpen((open) => !open)} className="grid size-9 place-items-center rounded-md text-black transition hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 md:hidden" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label="Toggle navigation menu"><span className="text-xl leading-none">☰</span></button>
      </div>
      {menuOpen && <div id="mobile-navigation" className="absolute right-5 top-14 z-50 w-52 rounded-lg border border-zinc-200 bg-white p-2 shadow-lg dark:border-zinc-800 dark:bg-zinc-950 md:hidden">{links.map(([label, href]) => <Link href={href} key={href} onClick={() => setMenuOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium text-black transition hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-900">{label}</Link>)}</div>}
    </nav>
  </header>;
}
