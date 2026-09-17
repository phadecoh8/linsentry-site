"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode, useState } from "react";
import { latestRelease } from "@/lib/changelog";
import { ChevronIcon } from "./icons";

/* ── Navigation data ────────────────────────────────────────────── */

type NavItem = { label: string; href: string };

type NavSection = {
  label: string;
  items: NavItem[];
};

const sections: NavSection[] = [
  {
    label: "Getting Started",
    items: [
      { label: "Introduction", href: "/docs" },
      { label: "Installation", href: "/docs/install" },
      { label: "Usage", href: "/docs/usage" },
    ],
  },
  {
    label: "Security Checks",
    items: [{ label: "Security Checks", href: "/docs/checks" }],
  },
  {
    label: "Reference",
    items: [
      { label: "Scope & Limitations", href: "/docs/scope" },
      { label: "Roadmap", href: "/docs#roadmap" },
    ],
  },
];

/* ── Sidebar section (collapsible, defaults to expanded) ───────── */

function SidebarSection({
  section,
  pathname,
  onNavigate,
}: {
  section: NavSection;
  pathname: string;
  onNavigate?: () => void;
}) {
  const [expanded, setExpanded] = useState(true);
  return (
    <div>
      <button
        onClick={() => setExpanded((value) => !value)}
        className="flex w-full items-center justify-between gap-2 rounded-md px-2 py-1.5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100 hover:text-zinc-950 dark:text-white dark:hover:bg-zinc-900"
        aria-expanded={expanded}
      >
        {section.label}
        <ChevronIcon
          className={`size-4 shrink-0 text-zinc-400 transition-transform duration-150 ${
            expanded ? "rotate-90" : ""
          }`}
        />
      </button>
      {expanded && (
        <ul className="mt-0.5 space-y-0.5">
          {section.items.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  aria-current={active ? "page" : undefined}
                  className={`block border-l-2 py-1 pl-3 pr-2 text-sm transition ${
                    active
                      ? "border-blue-500 bg-zinc-100 font-medium text-zinc-950 dark:border-blue-400 dark:bg-zinc-900 dark:text-white"
                      : "border-transparent text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

/* ── Expandable info item (top of sidebar) ──────────────────────── */

function InfoItem({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="mb-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
      <button
        onClick={() => setExpanded((value) => !value)}
        className="flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-zinc-50 dark:text-white dark:hover:bg-zinc-900/50"
        aria-expanded={expanded}
      >
        {title}
        <ChevronIcon
          className={`size-3.5 shrink-0 text-zinc-400 transition-transform duration-150 ${
            expanded ? "rotate-90" : ""
          }`}
        />
      </button>
      {expanded && (
        <div className="border-t border-zinc-200 px-3 py-2.5 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
          {children}
        </div>
      )}
    </div>
  );
}

/* ── Sidebar inner content (shared between desktop & mobile) ──── */

function SidebarContent({
  pathname,
  onNavigate,
  showHeading = true,
}: {
  pathname: string;
  onNavigate?: () => void;
  showHeading?: boolean;
}) {
  return (
    <>
      {/* Info items */}
      <div className="mb-6">
        <InfoItem title="LinSentry Version">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-xs font-medium text-zinc-900 dark:text-white">
              {latestRelease.version}
            </span>
            <Link
              href="/changelog"
              onClick={onNavigate}
              className="text-xs font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              View changelog →
            </Link>
          </div>
        </InfoItem>
        <InfoItem title="Language">
          <div className="space-y-2">
            <p className="text-xs font-medium text-zinc-950 dark:text-white">
              Bash (current)
            </p>
            <p className="text-xs leading-5 text-zinc-500 dark:text-zinc-400">
              A cross-platform Rust rewrite is planned.
            </p>
            <Link
              href="/docs#roadmap"
              onClick={onNavigate}
              className="inline-block text-xs font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              View roadmap →
            </Link>
          </div>
        </InfoItem>
      </div>

      {showHeading && (
        <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          Documentation
        </p>
      )}

      {/* Collapsible sections */}
      <nav className="space-y-1.5">
        {sections.map((section) => (
          <SidebarSection
            key={section.label}
            section={section}
            pathname={pathname}
            onNavigate={onNavigate}
          />
        ))}
      </nav>
    </>
  );
}

/* ── Mobile toggle button ──────────────────────────────────────── */

function MobileToggle({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 left-4 z-50 grid size-10 shrink-0 place-items-center rounded-full border border-zinc-200 bg-white text-zinc-950 shadow-lg transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900 lg:hidden"
      aria-label="Toggle sidebar navigation"
    >
      <span className="text-lg leading-none">☰</span>
    </button>
  );
}

/* ── Layout component ──────────────────────────────────────────── */

export function DocsLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="mx-auto grid max-w-7xl lg:grid-cols-[15rem_minmax(0,1fr)]">
      {/* Desktop sidebar */}
      <aside className="hidden overflow-y-auto border-r border-zinc-200 px-5 py-8 lg:min-h-[calc(100vh-4rem)] lg:block lg:px-6 dark:border-zinc-800">
        <div className="sticky top-20">
          <SidebarContent pathname={pathname} />
        </div>
      </aside>

      {/* Mobile sidebar drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <aside className="absolute inset-y-0 left-0 flex w-72 max-w-[85vw] flex-col overflow-y-auto border-r border-zinc-200 bg-white px-5 py-6 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm font-semibold">Documentation</p>
              <button
                onClick={() => setMobileOpen(false)}
                className="grid size-7 place-items-center rounded-md text-zinc-500 transition hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900"
                aria-label="Close sidebar"
              >
                ✕
              </button>
            </div>
            <SidebarContent
              pathname={pathname}
              onNavigate={() => setMobileOpen(false)}
              showHeading={false}
            />
          </aside>
        </div>
      )}

      {/* Mobile toggle */}
      <MobileToggle onClick={() => setMobileOpen(true)} />

      {/* Main content */}
      <div className="min-w-0 px-5 py-12 sm:px-10 sm:py-16 lg:px-16">
        {children}
      </div>
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