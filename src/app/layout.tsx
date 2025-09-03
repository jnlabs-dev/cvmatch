import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Layout } from "@/app/components/layout/Layout";
import { PrelineScriptWrapper } from "@/app/components/preline/PrelineScriptWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CVMatch",
  description: "AI-powered resume tailoring SaaS. Upload your CV, match it to job descriptions, get a quality score, and generate tailored ATS-friendly resumes in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>
          {children}
        </Layout>
      </body>
      <PrelineScriptWrapper />
    </html>
  );
}
