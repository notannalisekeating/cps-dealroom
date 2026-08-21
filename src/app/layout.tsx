import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CPS Navigator",
  description: "Commercial legal guidance where work happens.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
