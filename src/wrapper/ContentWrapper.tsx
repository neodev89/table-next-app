import { JSX } from "@emotion/react/jsx-runtime";
import React from "react";
import style from "./style.module.sass";

interface contentWrapperType {
    children: React.ReactElement;
}

export const ContentWrapper: React.FC<contentWrapperType> = ({ children }): JSX.Element => {
    return (
        <div className={style.contentWrapper}>
            {children}
        </div>
    )
}