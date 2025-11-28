import Login from "../login/page";
import styles from "../../../app/home/style.module.sass"

import { Box, CircularProgress, Grid, Button, Typography } from "@mui/material";
import { useEffect } from "react";

interface codeHomeProps {
    login: boolean;
    setLogin: (login: boolean) => void;
}

export default function CodeHome({
    login,
    setLogin,
}: codeHomeProps) {

    useEffect(() => {
        setLogin(false);
    }, []);
    
    return (
        <>
            {
                !login ?
                    (
                        <Grid container spacing={2} columns={12}
                            rowSpacing={1}
                            sx={{ minWidth: "100%" }}
                        >
                            <Grid size={{ xs: 2, md: 4 }} offset={{ xs: 2, md: 8 }}>
                                <Box className={styles.boxNavbar}>
                                    <Button variant="contained" onClick={() => setLogin(true)}>Login</Button>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 4, md: 8 }} offset={{ xs: 1, md: 2 }}
                                sx={{ gridRow: "1" }}
                            >
                                <Box className={styles.title}>
                                    <Typography variant="h1" className={styles.textTitle}>
                                        Freelance App
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 4, md: 8 }} offset={{ xs: 1, md: 2 }}>
                                <Box className={styles.description}>
                                    <Typography variant="h4" className={styles.textTitle}>
                                        Un'App per sapere quanto guadagnare e, soprattutto, quanto risparmiare
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    ) : (
                        <Login setLogin={setLogin} />
                    )
            }
        </>
    )
}