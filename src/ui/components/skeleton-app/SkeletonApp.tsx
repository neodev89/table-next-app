import { Box, Stack } from "@mui/material";
import { ReactNode } from "react"

interface skeletonAppProps {
    children: ReactNode;
}

const SkeletonApp = (props: skeletonAppProps) => {
    {/** Dovrà contenere una navbar fixed in alto con i comandi
        principali per la navigazione (topper), una barra in basso con delle info relative 
        all'utente che sta navigando (footer) e tutte le altre interfacce
        all'interno
     */}

    return (
        <Stack spacing={1}>
            <Box></Box>
            <Box>
                {props.children}
            </Box>
            <Box></Box>
        </Stack>
    );
};