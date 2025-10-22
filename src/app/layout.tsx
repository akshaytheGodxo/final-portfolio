import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono, Micro_5 } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/Stairs";
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const micro5 = Micro_5({
  variable: "--font-micro-5",
  subsets: ["latin"],
  weight: "400",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akshay Singh Chauhan",
  description: "My portfolio",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetBrainsMono.variable} ${micro5.variable} antialiased`}
      >

        
          <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
