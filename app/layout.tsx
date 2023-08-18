import "./globals.css";
import type { Metadata } from "next";

import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "Rekon: The Ultimate Security Assessment Tool",
  description:
    "Rekon is a security assesment tool developer by three Nepali developers and hackers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
