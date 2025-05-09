import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "To Do List | @eriket0107",
    template: "%s | @eriket0107",
  },
  description: "A simple to do list app built with Next.js and CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${onest.variable}`}>{children}</body>
    </html>
  );
}
