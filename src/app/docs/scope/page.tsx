import type { Metadata } from "next";
import { Callout, DocsLayout } from "@/components/docs-layout";

export const metadata: Metadata = {
  title: "Scope & Limitations",
  description: "What LinSentry audits and where its checks stop.",
};

export default function Page() {
  return (
    <DocsLayout>
      <article className="max-w-3xl font-sans">
        <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
          REFERENCE
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Scope &amp; Limitations
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          What LinSentry audits, and the structural limits it shares with
          every configuration-based auditor.
        </p>

        <Callout>
          LinSentry audits configuration and access-control posture. It is not
          a rootkit detector or a supply-chain verifier. These are structural
          limits of any configuration-based auditor — including Lynis and
          similar tools — not gaps specific to LinSentry.
        </Callout>

        <h2 className="mt-12 text-2xl font-semibold">
          Kernel-level rootkits (LKM rootkits / syscall hooking)
        </h2>
        <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
          If an attacker loads a malicious kernel module, they can hook the
          syscalls that <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px] dark:bg-zinc-900">ps</code>,{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px] dark:bg-zinc-900">ls</code>,{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px] dark:bg-zinc-900">netstat</code>,{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px] dark:bg-zinc-900">/proc</code>, and{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px] dark:bg-zinc-900">ss</code> all
          rely on. The rootkit hides its own process, its open ports, its
          files — from every one of those tools, system-wide.
        </p>
        <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
          LinSentry&apos;s checks all work by asking the OS for information,
          using those same binaries. If the kernel is lying to userspace,
          LinSentry inherits the lie — the entire trust chain (script →
          syscall → kernel → truth) is broken at the root.
        </p>
        <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
          What actually helps: kernel integrity tools like{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px] dark:bg-zinc-900">IMA/EVM</code>,{" "}
          offline analysis (booting from a clean trusted medium and
          comparing), eBPF-based runtime monitors, or memory forensics
          (Volatility).
        </p>

        <h2 className="mt-12 text-2xl font-semibold">
          Supply-chain compromise inside legitimately installed packages
        </h2>
        <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
          This is the pattern behind incidents like the{" "}
          <a
            className="text-zinc-950 underline underline-offset-4 hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
            href="https://en.wikipedia.org/wiki/XZ_Utils_backdoor"
            target="_blank"
            rel="noreferrer"
          >
            2024 xz-utils backdoor
          </a>
          : malicious code deliberately inserted into a trusted, signed
          package by a compromised maintainer or build pipeline. File
          permissions are correct. The package manager says it&apos;s
          verified.
        </p>
        <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
          Every check that looks at configuration and access control passes —
          because the malicious code isn&apos;t a config error, it&apos;s
          logic hidden inside a binary that&apos;s supposed to be there.
          A permissions/config auditor has no mechanism to evaluate what a
          binary does. That requires reproducible builds,{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px] dark:bg-zinc-900">SBOM</code>{" "}
          (software bill of materials) tracking, or binary/behavioral
          analysis — a different category of tool entirely.
        </p>
      </article>
    </DocsLayout>
  );
}
