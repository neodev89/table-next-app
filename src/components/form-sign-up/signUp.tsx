"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { initializerSignUpUser, signUpSchema, SignUpSchemaProps } from "@/zod/signUpSchema";
import { Box, Grid, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Items } from "../items-grid/Items";


export default function SignUp() {
    const { control, handleSubmit } = useForm<SignUpSchemaProps>({
        resolver: zodResolver(signUpSchema)
    });
    const user = initializerSignUpUser;
    const [userSignUp, setUserSignUp] = useState<SignUpSchemaProps>(user)
    return (
        <Box sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            minHeight: '100%',
            minWidth: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
        }}>
            <Grid container columns={9} columnGap={2} sx={{
                minHeight: '100%',
                minWidth: '100%',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 100, 50, 0.3)',
            }}>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Items>
                        <Controller
                            name="nameUser"
                            control={control}
                            defaultValue={userSignUp.emailUser}
                            rules={{ required: "Email obbligatoria" }}
                            render={({ field, fieldState }) => (
                                <TextField
                                    {...field}
                                    sx={{
                                        backgroundColor: 'white',
                                        borderRadius: 2,
                                    }}
                                    label="email"
                                    type="email"
                                    fullWidth
                                    error={!!fieldState.error}
                                    helperText={fieldState.error?.message}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        field.onChange(value); // 🔑 aggiorna react-hook-form
                                        setUserSignUp(prev => ({ ...prev, emailUser: value }));
                                    }}
                                />
                            )}
                        />
                    </Items>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Items>
                        <Controller
                            name="passwordUser"
                            control={control}
                            defaultValue={userSignUp.passwordUser}
                            rules={{ required: "Password obbligatoria" }}
                            render={({ field, fieldState }) => (
                                <TextField
                                    {...field}
                                    sx={{
                                        backgroundColor: 'white',
                                        borderRadius: 2,
                                        '& input::placeholder': {
                                            fontSize: '1rem', // oppure '16px', '18px', ecc.
                                        },
                                    }}
                                    label="password"
                                    type="password"
                                    fullWidth
                                    error={!!fieldState.error}
                                    helperText={fieldState.error?.message}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        field.onChange(value); // 🔑 aggiorna react-hook-form
                                        setUserSignUp(prev => ({ ...prev, passwordUser: value }));
                                    }}
                                />
                            )}
                        />
                    </Items>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Items>

                    </Items>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Items>

                    </Items>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Items>

                    </Items>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Items>

                    </Items>
                </Grid>
            </Grid>
        </Box>
    )
}