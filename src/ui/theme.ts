"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",
  cssVariables: true,
  typography: {
    fontFamily: "var(--font-vazir)",
  },
});

export default theme;
