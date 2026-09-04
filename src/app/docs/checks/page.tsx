import type { Metadata } from "next";
import { Callout, DocsLayout } from "@/components/docs-layout";

export const metadata: Metadata = {
  title: "Security Checks",
  description: "Reference for LinSentry security hardening checks.",
};

const checks = [
  {
    title: "Open port scanning",
    text: "Lists active TCP and UDP listening ports on the system, giving you a baseline view of every service that is currently accepting connections.",
  },
  {
    title: "Port exposure detection",
    text: "Flags ports bound to 0.0.0.0 or [::] rather than only local interfaces. A port listening on all interfaces is reachable from the network, not just from localhost.",
  },
  {
    title: "SSH configuration audit",
    text: "Checks PermitRootLogin, PasswordAuthentication, and PermitEmptyPasswords — the three SSH settings most commonly exploited in brute-force attacks. Offers interactive fix prompts when a risky value is found.",
  },
  {
    title: "SSH config file permission audit",
    text: "Verifies that sshd_config is owned by root and is not group- or other-writable. A world-writable SSH config file could allow a local attacker to change server behavior.",
  },
  {
    title: "World-writable file scanner",
    text: "Finds files in the home directory (and beyond) that any local user can modify. World-writable files are a privilege-escalation vector: any account on the system can tamper with them.",
  },
  {
    title: "User account audit",
    text: "Flags duplicate UID 0 (root-level) accounts and accounts with no password set. A second UID 0 account means a second root-equivalent user — often an indicator of compromise or misconfiguration.",
  },
  {
    title: "Sudo privilege audit",
    text: "Lists members of the sudo group for manual review and detects NOPASSWD entries — accounts that can run administrative commands without a password prompt. This check is intentionally detection-only: sudo and privilege changes are left to the administrator's judgment, since an incorrect automated change could lock an admin out of sudo entirely.",
  },
  {
    title: "Firewall status check",
    text: "Detects whether ufw is installed and active. If it is not, LinSentry offers to install and enable it. It also cross-references ports flagged as exposed in the earlier port-exposure check and lets the user selectively close specific ports through an interactive, numbered selection.",
  },
  {
    title: "Pending security update check",
    text: "Checks for available package updates specifically tagged as security-related via apt. These are updates where upstream maintainers have designated a patch as addressing a known vulnerability. LinSentry offers to install them.",
  },
  {
    title: "Security framework (AppArmor) status",
    text: "Checks whether AppArmor — Linux's mandatory access control system — is installed and actively enforcing profiles. On WSL, it handles and explains a known limitation where WSL's kernel does not fully support AppArmor enforcement even when the module is loaded.",
  },
  {
    title: "Malware / rootkit scanner presence",
    text: "Checks whether a baseline scanning tool (rkhunter or chkrootkit) is installed. If neither is found, it offers to install rkhunter. Note: this checks for the presence of scanning tools, not active malware — LinSentry does not perform malware scanning itself.",
  },
  {
    title: "Overall risk summary",
    text: "Tallies warnings found across all checks in the run into a final result: Excellent (0 warnings), Good (1–2 warnings), or Needs Attention (3+ warnings). This gives you a single at-a-glance indicator of your system's posture after the full audit.",
  },
];

export default function Page() {
  return (
    <DocsLayout>
      <article className="max-w-3xl">
        <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
          REFERENCE
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Security checks
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Every check LinSentry performs, with what it does and why it
          matters. Checks are organized by the area of system posture they
          examine.
        </p>
        <div className="mt-12 space-y-12">
          {checks.map((check, i) => (
            <section key={check.title}>
              <p className="font-mono text-xs text-zinc-500">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 text-2xl font-semibold">{check.title}</h2>
              <p className="mt-3 leading-7 text-zinc-700 dark:text-zinc-300">
                {check.text}
              </p>
            </section>
          ))}
        </div>
        <Callout>
          Findings are prompts for review; always consider the host&apos;s
          role and policy before making changes. LinSentry asks before
          modifying anything.
        </Callout>
      </article>
    </DocsLayout>
  );
}
