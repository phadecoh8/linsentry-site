import Link from "next/link";
import { DocSearch } from "./doc-search";
import { GitHubIcon } from "./icons";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle"
import { renderToHTMLOrFlight } from "next/dist/server/app-render/app-render";

function renderNavLinks() {
    return (
        <div className="hidden items-center gap-5 text-sm text-zinc-600 dark:text-zinc-400 md:flex">
            <Link
                className="transition hover:text-zinc-950 dark:hover:text-white"
                href="/docs"
            >
                Documentation
            </Link>
            <Link
                className="transition hover:text-zinc-950 dark:hover:text-white"
                href="/blog"
            >
                Blog
            </Link>
            <Link
                className="transition hover:text-zinc-950 dark:hover:text-white"
                href="/changelog"
            >
                Changelog
            </Link>
        </div>
    )
}

function renderRightActions() {
    return (
        <div className="flex items-center gap-1 sm:gap-3">
            <DocSearch />
            <a
                href="https://github.com/phadecoh8/LinSentry"
                target="_blank"
                rel="noreferrer"
                className="grid size-9 place-items-center rounded-md text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                aria-label="LinSentry Open Source Code"
            >
                <GitHubIcon className="size-[18px]" />
            </a>
            <ThemeToggle />
        </div>
    )
}

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/90 backdrop-blur transition-colors dark:border-zinc-800/80 dark:bg-zinc-950/90">
            <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
                <Logo />
                {renderNavLinks()}
                {renderRightActions()}
            </nav>
        </header>
    )
}