// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header"; // Import Header
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Default metadata for the site (can be overridden by pages)
export const metadata: Metadata = {
  title: "ApolloClone 24|7 - Healthcare Simplified",
  description: "Find doctors, book appointments, order medicines, and manage health records.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header /> {/* Include Header here */}
        {children}
        {/* Footer could go here */}
      </body>
    </html>
  );
}