import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Swimming Pool Management System",
  description: "A modern web application for managing swimming pool operations, bookings, and maintenance",
  keywords: ["swimming pool", "pool management", "booking system", "maintenance tracking"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Swimming Pool Management System",
    description: "Manage your swimming pool operations efficiently",
    type: "website",
    locale: "en_US",
    siteName: "Swimming Pool Management",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swimming Pool Management System",
    description: "Manage your swimming pool operations efficiently",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
