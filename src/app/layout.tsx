import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ethical farmers",
  description: "Ethical farming here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-dvw h-dvh flex flex-col p-1 gap-1">
        {children}
      </body>
    </html>
  );
}
