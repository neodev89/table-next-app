'use client';
import styles from "./style.module.sass";
import { Box, Button, CircularProgress, Stack, TextField, Typography } from "@mui/material"
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { grey } from "@mui/material/colors";

export default function Login() {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState<{ email: string, password: string }>({
        email: '',
        password: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleGoBack = () => {
        router.push('/');
    };
    
    return (
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
                            pl: 1,
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
                            height: '35rem',
                            width: '30rem',
                            backgroundColor: 'white',
                            borderRadius: 4,
                            top: 50,
                            left: '35%',
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
                                }}>
                                    <TextField
                                        name="email"
                                        type="email"
                                        id="email"
                                        onChange={handleChange}
                                        value={user.email}
                                    />
                                    <TextField
                                        name="password"
                                        type="password"
                                        id="password"
                                        onChange={handleChange}
                                        value={user.password}
                                    />
                                    <Box
                                        className={styles.actionForm}
                                        sx={{
                                            border: `1px solid ${grey[400]}`
                                        }}
                                    >
                                        <Box></Box>
                                        <Box></Box>
                                    </Box>
                                </Stack>
                            </Box>
                        </Box>
                    </>
                )}
        </Box>
    )
}