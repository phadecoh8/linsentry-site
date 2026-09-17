import type { Metadata } from "next";
import { type Change, releases } from "@/lib/changelog";

export const metadata: Metadata = {
  title: "Changelog",
  description: "LinSentry release history.",
};

function Tag({ tag }: { tag: Change["tag"] }) {
  const styles = {
    added: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
    fixed: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
    improved: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
  };
  return (
    <span className={`mr-2 inline-block rounded px-1.5 py-0.5 text-[10px] font-medium uppercase leading-none ${styles[tag ?? "added"]}`}>
      {tag}
    </span>
  );
}

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-6 py-12 md:py-16">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-600 dark:text-zinc-400">
        Changelog
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-zinc-950 dark:text-white md:text-4xl">
        Release history
      </h1>
      <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400 md:text-lg">
        Every release, in order. Latest at the top.
      </p>

      <div className="mt-10 flex flex-col gap-8">
        <section className="relative">
          <h2 className="sticky top-0 z-10 bg-white/80 py-4 text-sm font-medium text-zinc-500 backdrop-blur-sm dark:bg-zinc-950/80 dark:text-zinc-400">
            2025
          </h2>
          <ol className="relative ms-3 border-s border-zinc-200 ps-6 dark:border-zinc-800">
            {releases.map((release, i) => {
              const isLast = i === releases.length - 1;
              return (
                <li key={release.version} className={`relative ${isLast ? "pb-0" : "pb-10"}`}>
                  <span className="absolute -start-6 top-1.5 size-2.5 translate-x-[calc(-50%-0.5px)] rounded-full border-2 border-zinc-500 bg-white dark:bg-zinc-950" />
                  <div className="mb-4 flex flex-wrap items-center gap-1.5">
                    <time dateTime={release.date} className="pe-2 font-mono text-xs font-medium tabular-nums text-zinc-600 dark:text-zinc-400">
                      {release.date}
                    </time>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md border border-zinc-200 bg-zinc-100 px-1.5 py-0.5 font-mono text-xs text-zinc-700 hover:underline dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                      href={`https://github.com/phadecoh8/LinSentry/releases/tag/${release.version}`}
                    >
                      {release.version}
                    </a>
                  </div>
                  <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                    {release.summary}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {release.changes.map((change, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300"
                      >
                        <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                        <span>
                          <Tag tag={change.tag} />
                          {change.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ol>
        </section>
      </div>
    </div>
  );
}
