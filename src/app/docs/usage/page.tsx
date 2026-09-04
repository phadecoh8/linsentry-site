import type { Metadata } from "next";
import { Callout, DocsLayout } from "@/components/docs-layout";

export const metadata: Metadata = {
  title: "Usage",
  description: "Run LinSentry and read its section-by-section report.",
};

export default function Page() {
  return (
    <DocsLayout>
      <article className="max-w-3xl">
        <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
          GETTING STARTED
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Usage</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Run LinSentry from the script directory. It prints a
          section-by-section report as it examines each area of system
          posture.
        </p>

        <pre className="mt-8 overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-50 p-5 text-sm text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100">
          <code>{`$ ./linsentry.sh`}</code>
        </pre>

        <h2 className="mt-12 text-2xl font-semibold">The report</h2>
        <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
          As LinSentry runs, it steps through each security check in turn.
          Each section reports what it found — a passing state, a warning, or
          a finding that needs your attention. When a check detects a
          correctable issue, it explains the risk and asks for y/n
          confirmation before modifying anything.
        </p>
        <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
          At the end of a full run, the overall risk summary tallies every
          warning into a final verdict:{" "}
          <strong className="font-semibold">Excellent</strong> (0 warnings),{" "}
          <strong className="font-semibold">Good</strong> (1–2 warnings), or{" "}
          <strong className="font-semibold">Needs Attention</strong> (3+
          warnings).
        </p>

        <h2 className="mt-12 text-2xl font-semibold">Interactive changes</h2>
        <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
          When LinSentry finds a correctable issue, it asks for y/n
          confirmation before it modifies anything. Changes are never made
          silently.
        </p>

        <Callout>
          Run with sudo only when a check or approved fix needs protected
          system access.
        </Callout>
      </article>
    </DocsLayout>
  );
}
