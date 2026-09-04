"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const sections = [
  {
    label: "Getting started",
    links: [
      ["Introduction", "/docs"],
      ["Installation", "/docs/install"],
      ["Usage", "/docs/usage"],
    ],
  },
  {
    label: "Reference",
    links: [
      ["Security checks", "/docs/checks"],
      ["Scope & Limitations", "/docs/scope"],
      ["Roadmap", "/docs#roadmap"],
    ],
  },
];

export function DocsLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="mx-auto grid max-w-7xl lg:grid-cols-[15rem_minmax(0,1fr)]">
      <aside className="border-b border-zinc-200 px-5 py-8 dark:border-zinc-800 lg:min-h-[calc(100vh-4rem)] lg:border-r lg:border-b-0 lg:px-8">
        <p className="text-sm font-semibold">Documentation</p>
        <nav className="mt-6 flex gap-6 overflow-x-auto lg:block lg:space-y-7">
          {sections.map((section) => (
            <div className="shrink-0" key={section.label}>
              <p className="mb-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                {section.label}
              </p>
              <ul className="space-y-1">
                {section.links.map(([title, href]) => {
                  const isActive = pathname === href;
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        aria-current={isActive ? "page" : undefined}
                        className={`block rounded-md px-2 py-1.5 text-sm transition ${
                          isActive
                            ? "bg-zinc-100 font-medium text-zinc-950 dark:bg-zinc-900 dark:text-white"
                            : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
                        }`}
                      >
                        {title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
      <div className="min-w-0 px-5 py-12 sm:px-10 sm:py-16 lg:px-16">{children}</div>
    </div>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <aside className="my-8 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm leading-6 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300">
      <span className="mr-2 font-semibold text-zinc-950 dark:text-white">
        Note:
      </span>
      {children}
    </aside>
  );
}
