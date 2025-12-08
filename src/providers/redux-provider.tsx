// app/providers.tsx
"use client";

import store from "@/global-state/store";
import theme from "@/themeMui";

import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/global-state/persist-store";
import { SafeDynamicCircular } from "@/ui/components/client-only-wrapper";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<SafeDynamicCircular size={50} />} persistor={persistor} onBeforeLift={() => {
        console.log("Persist completato, stato:", store.getState())
      }}>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {children}
          </LocalizationProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
