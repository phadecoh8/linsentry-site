import { GitHubIcon } from "./icons";
import { Logo } from "./logo";

export function SiteFooter() {
  return <footer className="border-t border-zinc-200 dark:border-zinc-800"><div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between"><div><Logo /><p className="mt-3 max-w-xs text-sm leading-6 text-zinc-600 dark:text-zinc-400">A lightweight security hardening auditor—available for Linux today, with macOS and Windows planned.</p></div><div className="text-sm text-zinc-500 dark:text-zinc-400 sm:text-right"><a className="inline-flex items-center gap-2 hover:text-zinc-950 dark:hover:text-white" href="https://github.com/phadecoh8/LinSentry" target="_blank" rel="noreferrer"><GitHubIcon className="size-4" />Source on GitHub</a><p className="mt-3">Built by phadecoh8 · © {new Date().getFullYear()} LinSentry</p></div></div></footer>;
}
