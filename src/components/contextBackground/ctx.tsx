"use client";
import React, { createContext, useContext, useState } from "react";

interface CtxBackground {
    mode: "dark" | "light";
    toggleMode?: () => void; // opzionale: funzione per cambiare tema
}

// 1. Crei il contesto
export const Ctx = createContext<CtxBackground | null>(null);

// 2. Provider
export const CtxProvider = ({ children }: { children: React.ReactNode }) => {
    const [mode, setMode] = useState<"dark" | "light">("light");

    const toggleMode = () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
    };

    const ctx: CtxBackground = {
        mode,
        toggleMode,
    };

    return <Ctx.Provider value={ctx}>{children}</Ctx.Provider>;
};

// ✅ Hook custom
export const useCtxBackground = () => {
    const ctx = useContext(Ctx);
    if (!ctx) {
        throw new Error("useCtxBackground must be used within a CtxProvider");
    }
    return ctx;
};