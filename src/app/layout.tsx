import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ResumeNavbar } from "@/components/resume-navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Resume Site",
  description: "Resume website powered by Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-sans">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ResumeNavbar />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
