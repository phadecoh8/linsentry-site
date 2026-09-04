import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

type Props = { params: Promise<{ slug: string }> };

type Post = {
  slug: string;
  title: string;
  date: string;
  byline: string;
  description: string;
  content: ReactNode;
};

const posts: Record<string, Post> = {
  "linsentry-v1-0": {
    slug: "linsentry-v1-0",
    title: "LinSentry is complete — v1.0.0",
    date: "Sep 4, 2026",
    byline: "phadecoh8",
    description:
      "The 10-check roadmap is done. Here's what LinSentry does end to end, what it deliberately doesn't, and what comes next.",
    content: (
      <>
        <p>
          LinSentry started as a way for me to actually learn Bash. Not just
          read tutorials about loops and subshells and parameter expansion,
          but build something real with them — something that had to work
          correctly, handle edge cases, and behave safely when it touched a
          live system. A security hardening auditor turned out to be the
          perfect project: every check is a small, self-contained problem with
          a clear goal, and the whole thing composes into a tool that&apos;s
          useful on its own.
        </p>
        <p>
          Today I&apos;m tagging <strong>v1.0.0</strong> — the release that
          completes the original 10-check roadmap. Here&apos;s what the full
          audit looks like end to end.
        </p>

        <h2>The checks</h2>
        <p>
          A LinSentry run works through each area of system posture —
          port exposure, SSH hardening, file permissions, user accounts,
          sudo privileges, firewall status, pending updates, AppArmor,
          malware scanner presence, and an overall risk summary that ties
          it together.
        </p>
        <ol>
          <li>
            <strong>Port exposure</strong> — scans listening TCP and UDP
            ports, then flags any bound to <code>0.0.0.0</code> or{" "}
            <code>[::]</code>. A port on all interfaces is reachable from the
            network, not just localhost.
          </li>
          <li>
            <strong>SSH hardening</strong> — audits{" "}
            <code>PermitRootLogin</code>, <code>PasswordAuthentication</code>,
            and <code>PermitEmptyPasswords</code>, plus the{" "}
            <code>sshd_config</code> file&apos;s ownership and write
            permissions.
          </li>
          <li>
            <strong>File permissions</strong> — scans the home directory for
            world-writable files that any local user could tamper with.
          </li>
          <li>
            <strong>User accounts</strong> — flags duplicate UID 0
            (root-level) accounts and any account with an empty password.
          </li>
          <li>
            <strong>Sudo privileges</strong> — lists sudo group members and
            detects NOPASSWD entries: accounts that can run admin commands
            without a password prompt.
          </li>
          <li>
            <strong>Firewall status</strong> — checks whether{" "}
            <code>ufw</code> is installed and active, offers to install or
            enable it, and lets you selectively close exposed ports.
          </li>
          <li>
            <strong>Pending security updates</strong> — checks for apt
            packages tagged specifically as security-related, and offers to
            install them.
          </li>
          <li>
            <strong>AppArmor</strong> — verifies Linux&apos;s mandatory
            access control system is installed and actively enforcing
            profiles, with WSL-specific handling for the kernel&apos;s known
            enforcement limitations.
          </li>
          <li>
            <strong>Malware scanner presence</strong> — confirms a baseline
            scanning tool (<code>rkhunter</code> or <code>chkrootkit</code>) is
            installed, and offers to install one if not.
          </li>
          <li>
            <strong>Overall risk summary</strong> — tallies warnings across
            every check into a final result: Excellent, Good, or Needs
            Attention.
          </li>
        </ol>

        <h2>What LinSentry is not</h2>
        <p>
          The more I built, the more I wanted to be honest about the
          boundaries. LinSentry audits configuration and access control. It
          is <em>not</em> a rootkit detector or a supply-chain verifier —
          and those aren&apos;t gaps I&apos;m hiding from. They&apos;re
          structural limits of any configuration-based auditor: if the kernel
          lies to userspace, every tool that asks the kernel inherits the
          lie, and a compromised package that ships correct permissions looks
          identical to a clean one.
        </p>
        <p>
          I wrote all of this up properly in the new{" "}
          <Link
            href="/docs/scope"
            className="text-zinc-950 underline underline-offset-4 hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
          >
            Scope &amp; Limitations
          </Link>{" "}
          documentation page — the kernel-rootkit case, the supply-chain case
          (I use the 2024 xz-utils backdoor as the example), and the tools
          that actually address those categories.
        </p>

        <h2>What&apos;s next</h2>
        <p>
          The Bash version has reached a natural end point. The next real
          step is a <strong>cross-platform rewrite in Rust</strong> — the
          same audit logic compiled for Linux, macOS, Windows, and Termux.
          A lot of what was painful in Bash (portable privilege checks,
          structured output, safe interactive prompts on terminals that
          differ platform to platform) gets much more tractable in a compiled
          language.
        </p>
        <p>
          For now: if you&apos;re on Linux or WSL, grab the script from the{" "}
          <a
            className="text-zinc-950 underline underline-offset-4 hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
            href="https://github.com/phadecoh8/LinSentry"
            target="_blank"
            rel="noreferrer"
          >
            GitHub repo
          </a>
          ,
          run it, and look at the risk summary at the end. Then go fix the
          things it flags — that&apos;s the whole point.
        </p>
      </>
    ),
  },
  "welcome-to-linsentry": {
    slug: "welcome-to-linsentry",
    title: "Welcome to LinSentry",
    date: "2025",
    byline: "phadecoh8",
    description:
      "An introduction to LinSentry, a security hardening auditor for Linux.",
    content: (
      <>
        <p>
          LinSentry helps you spot common hardening gaps quickly and make
          informed changes. It&apos;s a lightweight security audit that runs
          from a single Bash script — no daemon, no agent, no dependencies
          beyond a standard Linux environment.
        </p>
        <p>
          Automated attacks look for exposed services, weak SSH settings,
          loose file permissions, and risky accounts. LinSentry automates
          checks for these common misconfigurations and asks before it ever
          changes anything.
        </p>
        <p>
          The project is focused: audit, report, offer a fix, move on. It
          doesn&apos;t try to be an agent or a monitoring platform. It&apos;s
          a tool for the five minutes after you stand up a box to make sure
          the obvious things aren&apos;t left on.
        </p>
      </>
    ),
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();
  return (
    <article className="mx-auto w-full max-w-3xl flex-1 px-6 py-12 md:py-16">
      <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
        {post.date}
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-zinc-950 dark:text-white md:text-4xl">
        {post.title}
      </h1>
      <div className="mt-4 flex items-center gap-2 text-base leading-7 text-zinc-600 dark:text-zinc-400 md:text-lg">
        <span className="font-medium text-zinc-700 dark:text-zinc-300">
          {post.description}
        </span>
      </div>
      <div className="mt-5 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
        <span className="font-medium text-zinc-700 dark:text-zinc-300">
          by {post.byline}
        </span>
        <span aria-hidden="true">·</span>
        <span>{post.date}</span>
      </div>
      <div className="mt-10 space-y-6 text-base leading-8 text-zinc-700 dark:text-zinc-300 [&>h2]:mt-12 [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:tracking-tight [&>ol]:list-decimal [&>ol]:space-y-3 [&>ol]:pl-6 [&>ol>li]:leading-7 [&>p>code]:rounded [&>p>code]:bg-zinc-100 [&>p>code]:px-1.5 [&>p>code]:py-0.5 [&>p>code]:font-mono [&>p>code]:text-[13px] [&>p>code]:text-zinc-900 [&>p>code]:dark:bg-zinc-900 [&>p>code]:dark:text-zinc-100 [&>li>code]:rounded [&>li>code]:bg-zinc-100 [&>li>code]:px-1.5 [&>li>code]:py-0.5 [&>li>code]:font-mono [&>li>code]:text-[13px] [&>li>code]:text-zinc-900 [&>li>code]:dark:bg-zinc-900 [&>li>code]:dark:text-zinc-100 [&>ol>li>strong]:font-semibold [&>ol>li>strong]:text-zinc-950 [&>ol>li>strong]:dark:text-white">
        {post.content}
      </div>
    </article>
  );
}
