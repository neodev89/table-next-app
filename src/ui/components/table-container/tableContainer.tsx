"use client";

import { SxProps } from "@mui/material";
import { Box, Theme } from "@mui/system";
import { ReactNode } from "react";

interface tableContainerProps {
    children: ReactNode;
    sx?: SxProps<Theme>;
    className?: string;
    style1?: string;
    style2?: string;
}

const TableContainer = ({
    children,
    style1
}: tableContainerProps) => {
    return (
        <Box className={`${style1}`}>
            {children}
        </Box>
    );
};

export default TableContainer;