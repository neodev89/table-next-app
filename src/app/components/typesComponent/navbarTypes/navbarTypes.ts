import { SxProps, Theme } from "@mui/material";

interface navbarType {
    id: string | number;
    description: string;
    sx?: SxProps<Theme>;
}

interface navbarArray {
    navArray: Array<navbarType>;
}

export type { navbarType, navbarArray };