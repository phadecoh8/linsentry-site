"use client";

import { useState } from "react";

const platforms = ["Linux / WSL", "macOS", "Windows", "Termux"] as const;
type Platform = (typeof platforms)[number];

export function InstallPanel() {
  const [platform, setPlatform] = useState<Platform>("Linux / WSL");
  const [copied, setCopied] = useState(false);
  const command = "chmod +x linsentry.sh && ./linsentry.sh";
  async function copyCommand() { await navigator.clipboard.writeText(command); setCopied(true); window.setTimeout(() => setCopied(false), 1600); }
  const isAvailable = platform === "Linux / WSL";
  return <div className="mt-9 overflow-hidden rounded-xl border border-zinc-200 bg-white text-black shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-white">
    <div className="flex overflow-x-auto border-b border-zinc-200 px-2 dark:border-zinc-800" role="tablist" aria-label="Installation platforms">{platforms.map((item) => <button key={item} role="tab" aria-selected={platform === item} onClick={() => setPlatform(item)} className={`shrink-0 border-b-2 px-4 py-3 text-sm font-medium transition ${platform === item ? "border-zinc-950 text-zinc-950 dark:border-white dark:text-white" : "border-transparent text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"}`}>{item}{item !== "Linux / WSL" && <span className="ml-2 rounded-full border border-zinc-200 px-1.5 py-0.5 text-[7px] font-normal text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">Coming Soon</span>}</button>)}</div>
    {isAvailable ? <div className="p-4 sm:p-5"><p className="mb-3 text-sm text-zinc-600 dark:text-zinc-400">Run from the directory containing <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:bg-zinc-900">linsentry.sh</code>.</p><div className="flex overflow-hidden rounded-lg border border-zinc-200 bg-white text-black dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"><code className="min-w-0 flex-1 overflow-x-auto px-4 py-3.5 font-mono text-xs sm:text-sm"><span>$ </span>{command}</code><button onClick={copyCommand} className="border-l border-zinc-200 px-4 text-xs font-medium transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white" aria-label="Copy installation command">{copied ? "Copied" : "Copy"}</button></div></div> : <div className="p-7 sm:p-9"><p className="text-base font-semibold text-zinc-950 dark:text-white">{platform} support is planned.</p><p className="mt-2 max-w-lg text-sm leading-6 text-zinc-600 dark:text-zinc-400">It is not available yet. Use Linux directly, or run LinSentry in Ubuntu on WSL today.</p></div>}
  </div>;
}
