"use client";

import { createTheme } from "@mui/material/styles";
import palette from "./palette";

const theme = createTheme({
  palette,
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
