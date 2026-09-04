import type { Metadata } from "next";
import { Callout, DocsLayout } from "@/components/docs-layout";

export const metadata: Metadata = {
  title: "Installation",
  description: "Install LinSentry on Linux or Ubuntu through WSL.",
};

export default function Page() {
  return (
    <DocsLayout>
      <article className="max-w-3xl">
        <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
          GETTING STARTED
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Installation
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          LinSentry currently supports Linux. Ubuntu in WSL is supported.
        </p>

        <h2 className="mt-12 text-2xl font-semibold">Requirements</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-zinc-700 dark:text-zinc-300">
          <li>
            Bash and a Linux environment (including Ubuntu in WSL)
          </li>
          <li>
            Sudo privileges for protected checks and approved fixes
          </li>
          <li>
            The <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px] dark:bg-zinc-900">linsentry.sh</code> script
          </li>
        </ul>

        <h2 className="mt-12 text-2xl font-semibold">Run the script</h2>
        <pre className="mt-5 overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-50 p-5 text-sm text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100">
          <code>{`$ chmod +x linsentry.sh && ./linsentry.sh`}</code>
        </pre>

        <Callout>
          Review scripts before running them. LinSentry only makes changes
          after explicit confirmation.
        </Callout>

        <h2 className="mt-12 text-2xl font-semibold">Platform status</h2>
        <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
          Native macOS, Windows, and Termux releases have not shipped. They
          are planned as part of the cross-platform Rust rewrite.
        </p>
      </article>
    </DocsLayout>
  );
}
