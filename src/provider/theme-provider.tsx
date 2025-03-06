"use client";

import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import theme from "@/ui/theme";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <CacheProvider value={cacheRtl}>
    <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
  </CacheProvider>
);

export default ThemeProvider;
