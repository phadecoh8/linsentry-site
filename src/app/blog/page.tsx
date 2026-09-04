import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "LinSentry development notes.",
};

const posts = [
  {
    slug: "linsentry-v1-0",
    date: "Sep 4, 2026",
    title: "LinSentry is complete — v1.0.0",
    description:
      "The 10-check roadmap is done: port exposure, SSH, file permissions, user accounts, sudo, firewall, updates, AppArmor, malware scanners, and an overall risk summary.",
  },
  {
    slug: "welcome-to-linsentry",
    date: "2025",
    title: "Welcome to LinSentry",
    description:
      "Why a focused security audit can be useful for Linux hardening.",
  },
];

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-4xl flex-1 px-6 py-12 md:py-16">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-600 dark:text-zinc-400">
        Blog
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-zinc-950 dark:text-white md:text-4xl">
        Latest posts
      </h1>
      <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400 md:text-lg">
        Announcements and notes about building LinSentry.
      </p>
      <div className="mt-10 grid gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="flex flex-col rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6 transition hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700"
          >
            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
              {post.date}
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-zinc-950 dark:text-white">
              {post.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400 md:text-base">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
