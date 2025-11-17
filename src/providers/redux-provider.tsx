// app/providers.tsx
"use client";

import store from "@/global-state/store";
import theme from "@/themeMui";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";


export default function Providers(
    { children }: { children: React.ReactNode }
) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        {children}
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  );
}
