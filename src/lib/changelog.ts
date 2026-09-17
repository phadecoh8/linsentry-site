export type Change = { text: string; tag?: "added" | "fixed" | "improved" };

export type Release = {
  version: string;
  date: string;
  summary: string;
  changes: Change[];
  major?: boolean;
};

export const releases: Release[] = [
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

export const latestRelease = releases[0];