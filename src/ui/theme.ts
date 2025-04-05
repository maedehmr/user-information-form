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
      styleOverrides: {
        root: ({ theme }) => ({
          variants: [
            {
              props: { variant: "contained" },
              style: {
                background: theme.palette.common.white,
                color: theme.palette.primary.main,
                borderRadius: "3rem",
                padding: ".8rem 2.5rem",
                fontSize: "1rem",
              },
            },
          ],
        }),
      },
    },
  },
});

export default theme;
