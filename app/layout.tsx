import "./globals.css";

export const metadata = {
  title: "MV Roofing Co | Los Angeles & Riverside Roofing",
  description:
    "Family-owned roofing company with 30+ years experience. Roof repair, replacement, and emergency roofing services in Southern California.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Background */}
        <div className="bg-animated" />
        <div className="bg-overlay" />

        {/* Floating particles */}
        <div className="particle p1" />
        <div className="particle p2" />
        <div className="particle p3" />
        <div className="particle p4" />

        {children}
      </body>
    </html>
  );
}