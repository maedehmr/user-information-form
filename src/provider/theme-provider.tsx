"use client";

import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import theme from "@/ui/theme";
import { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => (
  <AppRouterCacheProvider
    CacheProvider={CacheProvider}
    options={{ key: "muirtl", stylisPlugins: [prefixer, rtlPlugin] }}
  >
    <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
  </AppRouterCacheProvider>
);

export default ThemeProvider;
