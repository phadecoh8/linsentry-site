import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import favicon from '@/app/favicon.png'

export const metadata: Metadata = {
  metadataBase: new URL("https://linsentry.dev"),
  icons: {
    icon: favicon.src,
    shortcut: favicon.src,
    apple: favicon.src,
  },
  title: {
    default: "LinSentry — Security Hardening Auditor",
    template: "%s | LinSentry"
  },
  description: "LinSentry is a lightweight security hardening auditor, currently available for Linux with macOS and Windows support planned.",
  openGraph: {
    type: "website",
    siteName: "LinSentry",
    title: "LinSentry — Security Hardening Auditor",
    description: "A lightweight security hardening auditor, currently available for Linux."
  },
  twitter: {
    card: "summary",
    title: "LinSentry — Security Hardening Auditor",
    description: "A lightweight security hardening auditor, currently available for Linux."
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <body className="min-h-full flex flex-col"><SiteHeader /><main className="flex-1">{children}</main><SiteFooter /></body>
    </html>
  );
}
