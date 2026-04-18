import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "MV Roofing | Elite Roofing Systems",
  description:
    "30+ years of precision roofing with elite craftsmanship. Licensed roofing experts serving Riverside & LA. Roof installation, repairs, leak detection & storm restoration.",
  keywords: [
    "roofing",
    "roof repair",
    "roof installation",
    "Riverside roofing",
    "LA roofing",
    "leak detection",
    "storm restoration",
  ],
  openGraph: {
    title: "MV Roofing | Elite Roofing Systems",
    description:
      "30+ years of precision roofing with elite craftsmanship. Licensed roofing experts serving Riverside & LA.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} bg-background`}>
      <body>
  <div className="bg-animated" />
  <div className="bg-overlay" />

  {children}
</body>
    </html>
  );
}
