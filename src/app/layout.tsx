import type { Metadata } from "next";
import { Inter, Playfair_Display, Raleway, Yeseva_One } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const yeseva = Yeseva_One({
  subsets: ["latin"],
  weight: ["400"], // Yeseva One chỉ có 1 weight duy nhất: 400
  variable: "--font-yeseva",
});

export const metadata: Metadata = {
  title: "Graduation Invitation",
  description: "Save the date for graduation ceremony",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${raleway.variable} ${yeseva.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
