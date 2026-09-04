import type { Metadata } from "next"; import Link from "next/link"; import { Callout, DocsLayout } from "@/components/docs-layout";
export const metadata: Metadata = {
    title: "Documentation",
    description: "Learn LinSentry security hardening audits, currently available for Linux."
};

function renderIntro() {
    return (
        <section>
            <p
                className="text-sm font-medium text-zinc-600 dark:text-zinc-400"
            >
                GETTING STARTED
            </p>
            <h1
                className="mt-3 text-4xl font-semibold tracking-tight"
            >
                Introduction
            </h1>
            <p
                className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400"
            >
                LinSentry is a lightweight security hardening auditor. As of v1.0.0 it performs a comprehensive set of checks across system posture — port exposure, SSH, file permissions, user accounts, sudo privileges, firewall, pending updates, AppArmor, and malware scanner presence — on Linux including Ubuntu through WSL. macOS and Windows support are planned via a Rust rewrite.
            </p>
        </section>
    )
}

function renderWhy() {
    return (
        <section>
            <h2
                className="mt-12 text-2xl font-semibold"
            >
                Why LinSentry exists
            </h2>
            <p
                className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300"
            >
                Automated attacks look for exposed services, weak SSH settings, loose file permissions, and risky accounts. LinSentry automates checks for these common misconfigurations.
            </p>
            <Callout>
                LinSentry asks before making any change. It is an audit aid, not a replacement for your security policy.
            </Callout>
        </section>
    )
}

function renderQuickLinks() {
    return (
        <div
            className="mt-8 grid gap-3 sm:grid-cols-2"
        >
            <Link
                href="/docs/install"
                className="rounded-lg border border-zinc-200 p-4 text-sm font-medium transition hover:border-zinc-950 dark:border-zinc-800 dark:hover:border-white"
            >
                Installation →
            </Link>
            <Link
                href="/docs/usage"
                className="rounded-lg border border-zinc-200 p-4 text-sm font-medium transition hover:border-zinc-950 dark:border-zinc-800 dark:hover:border-white"
            >
                Usage →
            </Link>
            <Link
                href="/docs/checks"
                className="rounded-lg border border-zinc-200 p-4 text-sm font-medium transition hover:border-zinc-950 dark:border-zinc-800 dark:hover:border-white"
            >
                Security checks →
            </Link>
            <Link
                href="/docs/scope"
                className="rounded-lg border border-zinc-200 p-4 text-sm font-medium transition hover:border-zinc-950 dark:border-zinc-800 dark:hover:border-white"
            >
                Scope &amp; Limitations →
            </Link>
        </div>
    )
}

function renderRoadmap() {
    return (
        <section>
            <h2
                id="roadmap"
                className="mt-14 text-2xl font-semibold"
            >
                Roadmap
            </h2>
            <p
                className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300"
            >
                The original 10-check roadmap is complete as of v1.0.0. The next
                major step is a cross-platform Rust rewrite planned for Linux,
                macOS, Windows, and Termux.
            </p>
        </section>
    )
}

export default function Page() {
    return (
        <DocsLayout>
            <article className="max-w-3xl">
                {renderIntro()}
                {renderWhy()}
                {renderQuickLinks()}
                {renderRoadmap()}
            </article>
        </DocsLayout>
    )
}