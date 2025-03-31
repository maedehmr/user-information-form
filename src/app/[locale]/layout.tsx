import type { Metadata } from "next";
import { geistSans, vazir } from "@/ui/fonts";
import ThemeProvider from "@/provider/theme-provider";
import StoreProvider from "@/provider/store-provider";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "@/ui/globals.css";
import { Header } from "@/components/layout";

export const metadata: Metadata = {
  title: "User Info Form",
  description: "Generated by create next app",
  icons: {
    icon: "/favicons/favicon.ico",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html dir="rtl" lang={locale}>
      <body className={`${vazir.variable} ${geistSans.variable}`}>
        <ThemeProvider>
          <StoreProvider>
            <NextIntlClientProvider>
              <Header />
              {children}
            </NextIntlClientProvider>
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
