"use client"
import React from "react";
import style from "./style.module.sass";
import { JSX } from "@emotion/react/jsx-runtime";
import { CacheProvider } from "@emotion/react";
import { muiCache } from "@/lib/emotion-cache";

interface contentWrapperType {
    children: React.ReactElement;
}

export const ContentWrapper: React.FC<contentWrapperType> = ({ children }): JSX.Element => {
    return (
        <CacheProvider value={muiCache}>
            <div className={style.contentWrapper}>
                {children}
            </div>
        </CacheProvider>
    )
}