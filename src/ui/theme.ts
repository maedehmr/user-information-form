"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",
  cssVariables: true,
  typography: {
    fontFamily: "var(--font-vazir)",
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
  },
});

export default theme;
