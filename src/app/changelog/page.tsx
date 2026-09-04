import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog",
  description: "LinSentry release history.",
};

type Change = { text: string; tag?: "added" | "fixed" | "improved" };

type Release = {
  version: string;
  date: string;
  summary: string;
  changes: Change[];
  major?: boolean;
};

const releases: Release[] = [
  {
    version: "v1.0.0",
    date: "2025",
    summary:
      "First complete release. Completes the original 10-check roadmap with pending security update detection, AppArmor status checking, malware scanner presence detection, and an overall risk summary.",
    major: true,
    changes: [
      { text: "Pending security update detection (apt-based) that flags security-tagged packages and offers to install them", tag: "added" },
      { text: "AppArmor / mandatory access control status check with WSL-specific handling for known kernel enforcement limitations", tag: "added" },
      { text: "Malware and rootkit scanner presence check for rkhunter and chkrootkit, with install option when neither is found", tag: "added" },
      { text: "Overall risk summary that tallies warnings across every check into Excellent, Good, or Needs Attention", tag: "added" },
    ],
  },
  {
    version: "v0.5.0",
    date: "2025",
    summary:
      "Added sudo privilege audit and firewall status check with interactive port closing.",
    changes: [
      { text: "Sudo privilege audit that lists sudo group members and flags NOPASSWD entries for accounts that can run admin commands without a password prompt", tag: "added" },
      { text: "Firewall status check (ufw): detects installation and active status, offers to install or enable ufw, and lets users selectively close specific ports flagged earlier by the port-exposure check", tag: "added" },
    ],
  },
  {
    version: "v0.4.1",
    date: "2025",
    summary:
      "Improved user account audit with individual UID 0 review and interactive password assignment.",
    changes: [
      { text: "User account audit now lists unfamiliar UID 0 accounts individually for review", tag: "improved" },
      { text: "Offers interactive password assignment for any account with no password set", tag: "added" },
    ],
  },
  {
    version: "v0.4.0",
    date: "2025",
    summary:
      "Added user account audit for duplicate root-level accounts and empty passwords.",
    changes: [
      { text: "User account audit that detects duplicate UID 0 (root-level) accounts and accounts with empty passwords", tag: "added" },
    ],
  },
  {
    version: "v0.3.0",
    date: "2025",
    summary:
      "Added SSH config file permission audit and home-directory world-writable file scanner.",
    changes: [
      { text: "SSH config file permission audit: verifies sshd_config ownership and group/other write access", tag: "added" },
      { text: "World-writable file scanner that finds files any local user can modify, starting in the home directory", tag: "added" },
    ],
  },
  {
    version: "v0.2.0",
    date: "2025",
    summary:
      "Added SSH configuration audit with interactive fixes; fixed port exposure detection.",
    changes: [
      { text: "SSH configuration audit that checks PermitRootLogin, PasswordAuthentication, and PermitEmptyPasswords with interactive fix prompts", tag: "added" },
      { text: "Fixed port exposure detection bugs", tag: "fixed" },
    ],
  },
  {
    version: "v0.1.0",
    date: "2025",
    summary:
      "Initial release: open port scanning and port exposure flagging.",
    major: true,
    changes: [
      { text: "Open port scanning and port exposure detection for ports bound to 0.0.0.0 / [::]", tag: "added" },
    ],
  },
];

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
