'use client';
import styles from "./style.module.sass";
import SignIn from "../form-sign-in/signIn";
import SignUp from "../form-sign-up/signUp";

import { Box, Button, CircularProgress, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { blue, common, grey, red } from "@mui/material/colors";
import { useSelector } from "react-redux";
import { RootZodState } from "@/global-state/store";

interface loginBool {
    setLogin: (login: boolean) => void;
}

export default function Login({
    setLogin
}: loginBool) {
    const [sign, setSign] = useState<'sign-in' | 'sign-up'>('sign-in');
    const loaded = useSelector((state: RootZodState) => state.loaded.logoutLoading);

    const handleGoBack = () => {
        setLogin(false);
    };

    return (
        <>
            <Box className={styles.login_box}>
                {loaded ? (
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                        width: '100vw',
                        // border: '3px solid red'
                    }}>
                        <CircularProgress size={80} color="primary" />
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
                                    <Box sx={{
                                        position: "relative",
                                        display: "flex",
                                        flexDirection: "column",
                                        height: "100%",
                                        width: "100%"
                                    }}>
                                        <Stack spacing={2} sx={{
                                            height: '100%',
                                            width: '100%',
                                            borderRadius: 4,
                                            backgroundColor: blue[100],
                                            justifyContent: "space-evenly",
                                        }}>
                                            <Box sx={{
                                                position: "relative",
                                                display: "flex",
                                                width: "100%",
                                                justifyContent: "center",
                                            }}>
                                                <Box className={styles.chooseSign} sx={{
                                                    height: "4rem",
                                                    width: "90%",
                                                    border: `4px double ${sign === 'sign-in' ? blue[900] : red[900]}`,
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
                            </Box>
                        </>
                    )}
            </Box>
        </>
    )
}