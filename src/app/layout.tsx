import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/Stairs";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Akshay Singh Chauhan - Portfolio",
  description:
    "Akshay Singh Chauhan's Portfolio - Full-Stack Developer specializing in React, Next.js, Node.js, and more. Showcasing projects, skills, and contact information.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >

        
          <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
