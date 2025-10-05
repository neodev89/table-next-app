import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 350,
      sm: 640,
      md: 1034,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Dosis", "sans-serif"'
  }
});

export default theme;