import type { Metadata } from "next";
import { geistSans, vazir } from "@/ui/fonts";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ThemeProvider from "@/provider/theme-provider";
import "@/ui/globals.css";
import StoreProvider from "@/provider/store-provider";

export const metadata: Metadata = {
  title: "User Info",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl">
      <body className={`${vazir.variable} ${geistSans.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider>
            <StoreProvider>{children}</StoreProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
