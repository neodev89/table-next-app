import WrapperComponent from "../wrapper/WrapperComponent";
import { Box, Stack } from "@mui/material";
import { ReactNode } from "react"
import { ContentWrapper } from "../wrapper/ContentWrapper";
// import { grey } from "@mui/material/colors";

interface skeletonAppProps {
    navbar: ReactNode;
    children: ReactNode;
    footer: ReactNode;
}

const SkeletonApp = (props: skeletonAppProps) => {
    {/** Dovrà contenere una navbar fixed in alto con i comandi
        principali per la navigazione (topper), una barra in basso con delle info relative 
        all'utente che sta navigando (footer) e tutte le altre interfacce
        all'interno
     */}

    return (
        <ContentWrapper>
            <WrapperComponent>
                <Stack spacing={1} sx={{
                    height: "100%",
                    width: "max-content",
                    backgroundColor: "transparent",
                }}>
                    <Box sx={{
                        position: "fixed",
                        display: "flex",
                        height: "80px",
                        width: "max-content",
                        backgroundColor: "transparent"
                    }}>
                        {props.navbar}
                    </Box>
                    <Box sx={{
                        position: "relative",
                        display: "flex",
                        height: "calc(100vh - 300px)",
                        width: "100%",
                    }}>
                        {props.children}
                    </Box>
                    <Box sx={{
                        position: "fixed",
                        display: "flex",
                        height: "220px",
                        width: "100%",
                    }}>
                        {props.footer}
                    </Box>
                </Stack>
            </WrapperComponent>
        </ContentWrapper>
    );
};
export default SkeletonApp;