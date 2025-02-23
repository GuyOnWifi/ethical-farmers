import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "CropChain",
  description: "Building a transparent future for agriculture where ethical farming practices are verified, valued, and rewarded.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-screen flex flex-col p-1 gap-1 pb-10">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
