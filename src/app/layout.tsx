import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const uiSans = Inter({
  variable: "--font-ui-sans",
  subsets: ["latin"],
  display: "swap",
});

const letterSerif = Playfair_Display({
  variable: "--font-letter-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Para ti",
  description: "Una carta para leer despacio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${uiSans.variable} ${letterSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
