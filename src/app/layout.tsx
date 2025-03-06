import type { Metadata } from "next";
import "../ui/globals.css";
import { geistSans, vazir } from "@/ui/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${vazir.variable} ${geistSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
