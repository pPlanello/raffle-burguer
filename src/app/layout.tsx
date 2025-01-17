import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Notification from "@/components/Notification/Notification";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raffle Burger",
  description:
    "Web created by Pablo Planello San Segundo. It is a present for my brother Rodrigo Planello",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Notification />
        <main className="flex min-h-screen flex-col justify-between pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}
