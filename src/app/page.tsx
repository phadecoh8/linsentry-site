import type { Metadata } from "next";
import Link from "next/link";
import { InstallPanel } from "@/components/install-panel";

export const metadata: Metadata = {
    title: "Security Hardening Auditor",
    description: "LinSentry is a lightweight security hardening auditor, available for Linux today with macOS and Windows planned."
};

const features: { title: string; description: string }[] = [
    { title: "Open port scanning", description: "Lists active TCP and UDP listening ports to establish a baseline of every service accepting connections." },
    { title: "Port exposure detection", description: "Flags ports bound to 0.0.0.0 or [::], revealing services reachable from the network rather than localhost only." },
    { title: "SSH configuration audit", description: "Checks PermitRootLogin, PasswordAuthentication, and PermitEmptyPasswords with interactive fix prompts." },
    { title: "SSH file permission audit", description: "Verifies sshd_config is root-owned and not group- or other-writable by any local account." },
    { title: "World-writable scanner", description: "Finds files in the home directory any local user can modify — a common privilege-escalation vector." },
    { title: "User account audit", description: "Flags duplicate UID 0 accounts and empty passwords, each a root-level access risk." },
    { title: "Sudo privilege audit", description: "Lists sudo group members and flags NOPASSWD entries so accounts that skip the password prompt are visible." },
    { title: "Firewall status check", description: "Detects ufw installation and activity, and lets you close exposed ports through an interactive selection." },
    { title: "Pending security update check", description: "Finds apt packages tagged as security-related and offers to install them." },
    { title: "Security framework (AppArmor) status", description: "Confirms AppArmor is installed and enforcing profiles, with WSL-specific handling." },
    { title: "Malware scanner presence", description: "Checks whether rkhunter or chkrootkit is installed; offers to install one when neither is found." },
    { title: "Overall risk summary", description: "Tallies warnings across every check into Excellent, Good, or Needs Attention." },
];

const docLinks: { title: string; description: string; href: string }[] = [
    { title: "Installation", description: "Run LinSentry on Linux, including WSL and Termux, and see what is planned next.", href: "/docs/install" },
    { title: "Every check explained", description: "What each of the 12 audit checks inspects and what a warning means.", href: "/docs/checks" },
];

const statusItems: string[] = [
    "Bash-based auditor runs anywhere Bash does — no compiled binary required.",
    "Interactive fix prompts walk you through closing the risks it flags.",
    "12 checks covering ports, SSH, accounts, sudo, firewall, and updates.",
];

function renderHeroSection() {
    return (
        <section className="grid items-center gap-10 py-12 md:gap-16 md:py-20 lg:grid-cols-2">
            <div className="min-w-0">
                <p className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-zinc-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 animate-pulse"></span>
                    v1.0.0 is live
                </p>
                <h1 className="mt-6 text-4xl font-bold tracking-[-0.06em] leading-[0.95] text-zinc-950 dark:text-white md:text-6xl lg:text-7xl">
                    Audit your system.
                    <br />
                    Know what needs attention.
                </h1>
                <p className="mt-6 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400 md:text-lg">
                    LinSentry is a lightweight security hardening auditor. It audits configuration and access-control posture across the areas attackers target first — currently for Linux with a cross-platform Rust rewrite planned.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Link
                        href="/docs/install"
                        className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-zinc-900 px-6 text-sm font-semibold !text-white shadow-lg transition hover:-translate-y-0.5 hover:opacity-90 sm:w-auto dark:bg-white dark:!text-zinc-950"
                    >
                        Install LinSentry
                    </Link>
                    <Link
                        href="/docs/usage"
                        className="inline-flex h-12 w-full items-center justify-center rounded-2xl border border-zinc-300 bg-zinc-50/80 px-6 text-sm font-semibold text-zinc-950 transition hover:border-zinc-400 sm:w-auto dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-white"
                    >
                        Explore usage
                    </Link>
                </div>
            </div>
            <div className="w-full max-w-full overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50/60 p-4 shadow-2xl backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60 md:p-6">
                <div className="mb-5 flex items-center justify-between">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-950 dark:text-white">
                        Quick Install
                    </p>
                    <span className="rounded-md border border-zinc-300 bg-zinc-50 px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400">
                        Linux / WSL
                    </span>
                </div>
                <InstallPanel />
            </div>
        </section>
    )
}

function renderFeatures() {
    return (
        <section className="grid gap-6 border-t border-zinc-200/80 py-14 md:grid-cols-3 dark:border-zinc-800">
            <div className="mb-10 max-w-3xl md:col-span-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-600 dark:text-zinc-400">
                    What it checks
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-zinc-950 dark:text-white md:text-4xl">
                    Focus on the risks that matter.
                </h2>
                <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400 md:text-lg">
                    LinSentry runs twelve focused checks that mirror the areas attackers target first, then tallies the results into a single risk summary.
                </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3 md:col-span-3">
                {features.map((feature, i) =>
                    <div
                        className="rounded-3xl border border-zinc-200 bg-zinc-50/30 p-6 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/30"
                        key={feature.title}
                    >
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-200 font-mono text-sm font-bold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                            {String(i + 1).padStart(2, "0")}
                        </div>
                        <h2 className="text-base font-semibold tracking-[-0.03em] text-zinc-950 dark:text-white">
                            {feature.title}
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400 md:text-base">
                            {feature.description}
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}

function renderDocsPreview() {
    return (
        <section className="grid gap-10 border-t border-zinc-200/80 py-14 xl:grid-cols-[1.5fr_1fr] dark:border-zinc-800">
            <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-600 dark:text-zinc-400">
                    Documentation
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-zinc-950 dark:text-white md:text-4xl">
                    Everything you need to get started.
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-400 md:text-lg">
                    Install LinSentry, learn the command-line workflow, and understand exactly what each of its checks inspects.
                </p>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {docLinks.map((doc) =>
                        <Link
                            className="rounded-3xl border border-zinc-200 bg-zinc-50/60 px-5 py-5 transition hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700"
                            href={doc.href}
                            key={doc.href}
                        >
                            <h3 className="text-base font-semibold text-zinc-950 dark:text-white">{doc.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400 md:text-base">{doc.description}</p>
                        </Link>
                    )}
                </div>
            </div>
            <div className="w-full rounded-[2rem] border border-zinc-200 bg-zinc-50/60 p-10 text-zinc-950 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-950 dark:text-white">
                    Current Status
                </p>
                <ul className="mt-5 flex flex-1 flex-col justify-between space-y-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400 md:text-base">
                    {statusItems.map((item, i) => <li key={i}>• {item}</li>)}
                </ul>
            </div>
        </section>
    )
}

function renderCTA() {
    return (
        <section className="py-14">
            <div className="flex flex-col gap-8 rounded-[2rem] border border-zinc-200 px-6 py-10 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 md:px-12 md:py-16">
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-semibold text-zinc-950 dark:text-white md:text-5xl">
                        Ready to dive into the details?
                    </h2>
                    <p className="mt-4 text-zinc-600 opacity-70 dark:text-zinc-400 md:text-lg">
                        Explore the full documentation for setup guides and a complete walkthrough of every audit check.
                    </p>
                </div>
                <Link
                    href="/docs"
                    className="inline-flex h-12 w-full items-center justify-center rounded-full bg-zinc-900 px-8 text-sm font-bold !text-white shadow-md transition hover:opacity-90 sm:w-auto dark:bg-white dark:!text-zinc-950"
                >
                    Open Documentation
                </Link>
            </div>
        </section>
    )
}

export default function Home() {
    return (
        <div className="mx-auto flex w-full max-w-7xl flex-col flex-1 px-6 py-8 md:py-16">
            <div className="flex-1 w-full">
                {renderHeroSection()}
                {renderFeatures()}
                {renderDocsPreview()}
                {renderCTA()}
            </div>
        </div>
    )
}
