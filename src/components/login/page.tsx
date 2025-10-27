'use client';
import styles from "./style.module.sass";

import { Box, Button, CircularProgress, Stack, Typography } from "@mui/material"
import { useState } from "react";
import { blue, common, grey, red } from "@mui/material/colors";
import SignIn from "../form-sign-in/signIn";
import SignUp from "../form-sign-up/signUp";

interface loginBool {
    setLogin: (login: boolean) => void;
}

export default function Login({
    setLogin
}: loginBool) {
    const [loading, setLoading] = useState<boolean>(false);
    const [sign, setSign] = useState<'sign-in' | 'sign-up'>('sign-in');

    const handleGoBack = () => {
        setLogin(false);
    };

    return (
        <>
            <Box className={styles.login_box}>
                {loading ? (
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                        width: '100vw',
                        border: '1px solid white'
                    }}>
                        <CircularProgress size={80} />
                    </Box>
                ) :
                    (
                        <>
                            <Box sx={{
                                height: "6rem",
                                width: "8rem",
                                pl: 0.2,
                            }}>
                                <Button
                                    variant="contained"
                                    color="warning"
                                    onClick={() => {
                                        handleGoBack();
                                        setLoading(true);
                                    }}
                                    className={styles.toBack}
                                >
                                    <Typography
                                        component='span'
                                        fontSize={15}
                                    >
                                        Indietro
                                    </Typography>
                                </Button>
                            </Box>
                            <Box sx={{
                                position: 'absolute',
                                display: 'block',
                                height: sign === 'sign-in' ? '35rem' : '38rem',
                                width: sign === 'sign-in' ? '30rem' : '55rem',
                                backgroundColor: 'white',
                                borderRadius: 4,
                                top: 50,
                                left: sign === 'sign-in' ? '35%' : '20%',
                            }}>
                                <Box sx={{
                                    position: 'relative',
                                    display: 'flex',
                                    height: '100%',
                                    width: '100%',
                                    borderRadius: 4,
                                    p: 4,
                                }}>
                                    <Stack spacing={2} sx={{
                                        height: '100%',
                                        width: '100%',
                                        border: `1px solid ${grey[400]}`,
                                        borderRadius: 4,
                                        backgroundColor: blue[100],
                                    }}>
                                        <Box className={styles.chooseSign} sx={{
                                            height: "4rem",
                                            width: "100%",
                                        }}>
                                            <Button
                                                variant="contained"
                                                size="small"
                                                sx={{
                                                    height: "2rem",
                                                    maxWidth: "6rem",
                                                    backgroundColor: sign === "sign-up" ? blue[900] : blue[400],
                                                }}
                                                onClick={() => setSign('sign-in')}
                                            >
                                                <strong>Sign In</strong>
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                size="small"
                                                sx={{
                                                    height: "2rem",
                                                    maxWidth: "6rem",
                                                    backgroundColor: sign === "sign-in" ? red[900] : red[100],
                                                    color: common.black
                                                }}
                                                onClick={() => setSign('sign-up')}
                                            >
                                                <strong>Sign Up</strong>
                                            </Button>
                                        </Box>
                                        <Box>
                                                {
                                                    sign === "sign-in" ? (
                                                        <SignIn />
                                                    ) : (
                                                        <SignUp />
                                                    )
                                                }
                                        </Box>
                                    </Stack>
                                </Box>
                            </Box>
                        </>
                    )}
            </Box>
        </>
    )
}