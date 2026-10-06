import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),

  title: {
    default: "Sashwat Shukla | IT Support Engineer",
    template: "%s | Sashwat Shukla",
  },

  description:
    "Sashwat Shukla — IT Support Engineer building toward Systems Administration, Cloud Infrastructure, Automation and AI-powered applications.",

  keywords: [
    "Sashwat Shukla",
    "IT Support Engineer",
    "Desktop Support Engineer",
    "Systems Administration",
    "Network Support",
    "Cloud Infrastructure",
    "Cisco",
    "Windows",
    "Active Directory",
    "Python",
    "Docker",
    "AI",
    "Next.js",
    "React",
  ],

  authors: [
    {
      name: "Sashwat Shukla",
    },
  ],

  creator: "Sashwat Shukla",

  openGraph: {
    title: "Sashwat Shukla | IT Support Engineer",
    description:
      "IT Support Engineer exploring Systems Administration, Cloud Infrastructure, Automation and AI-powered applications.",
    type: "website",
    locale: "en_IN",
    siteName: "Sashwat Shukla Portfolio",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}