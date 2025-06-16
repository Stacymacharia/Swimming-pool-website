import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Separate viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Updated metadata configuration
export const metadata: Metadata = {
  title: "Swimming Pool Management",
  description: "Swimming Pool Management System",
  metadataBase: new URL('http://localhost:3000'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}