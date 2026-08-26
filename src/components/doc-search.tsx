"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SearchIcon } from "./icons";

const docs = [
  { title: "Documentation", href: "/docs", description: "Start here for LinSentry documentation." },
  { title: "Installation", href: "/docs/install", description: "Install LinSentry on Linux or WSL." },
  { title: "Usage", href: "/docs/usage", description: "Run an audit and understand its output." },
  { title: "Security checks", href: "/docs/checks", description: "Explore every audit LinSentry performs." },
];

export function DocSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const matches = docs.filter((doc) => `${doc.title} ${doc.description}`.toLowerCase().includes(query.toLowerCase()));
  useEffect(() => {
    function dismiss(event: MouseEvent) { if (containerRef.current && !containerRef.current.contains(event.target as Node)) setOpen(false); }
    document.addEventListener("mousedown", dismiss);
    return () => document.removeEventListener("mousedown", dismiss);
  }, []);
  function toggleSearch() { setOpen((value) => !value); setQuery(""); }
  return <div ref={containerRef} className="relative"><button onClick={toggleSearch} className="hidden h-9 items-center gap-2 rounded-md border border-zinc-200 px-3 text-sm text-zinc-500 transition hover:border-zinc-300 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 md:flex" aria-expanded={open}><SearchIcon className="size-4" /><span className="hidden lg:inline">Search docs</span><kbd className="hidden rounded border border-zinc-200 px-1 text-[10px] dark:border-zinc-700 lg:inline">⌘K</kbd></button><button onClick={toggleSearch} className="grid size-9 place-items-center rounded-md text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 md:hidden" aria-label="Search documentation"><SearchIcon className="size-5" /></button>{open && <div className="absolute right-0 top-11 z-50 w-[min(22rem,calc(100vw-2rem))] rounded-xl border border-zinc-200 bg-white p-2 shadow-xl dark:border-zinc-800 dark:bg-zinc-950"><input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search documentation..." className="h-10 w-full rounded-lg bg-zinc-100 px-3 text-sm outline-none placeholder:text-zinc-500 dark:bg-zinc-900" /> <div className="mt-2">{matches.map((doc) => <Link onClick={() => setOpen(false)} href={doc.href} key={doc.href} className="block rounded-lg px-3 py-2.5 hover:bg-zinc-100 dark:hover:bg-zinc-900"><p className="text-sm font-medium">{doc.title}</p><p className="text-xs text-zinc-500 dark:text-zinc-400">{doc.description}</p></Link>)}{!matches.length && <p className="px-3 py-4 text-sm text-zinc-500">No matching pages.</p>}</div></div>}</div>;
}
