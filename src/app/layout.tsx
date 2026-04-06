import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "APREO — Hire Apprentice-Ready Talent Faster",
  description:
    "Apreo helps employers find apprentice-ready candidates through trade-specific matching based on certifications, availability, and work type.",
  openGraph: {
    title: "APREO — Hire Apprentice-Ready Talent Faster",
    description:
      "Apreo helps employers find apprentice-ready candidates through trade-specific matching based on certifications, availability, and work type.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body text-on-surface">{children}</body>
    </html>
  );
}
