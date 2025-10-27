import styles from "./styles.module.sass";
import { initializerSignInUser, SignInSchemaProps, signUpSchema, SignUpSchemaProps } from "@/zod/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Stack, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export default function SignIn() {

    const dispatch = useDispatch();

    const user = initializerSignInUser;
    const [userSignIn, setUserSignIn] = useState<Partial<SignInSchemaProps>>({
        email: user.email,
        password: user.password,
    });

    const { control, handleSubmit } = useForm<SignUpSchemaProps>({
        resolver: zodResolver(signUpSchema)
    });

    const onSubmit = () => {
        console.log("I dati sono stati salvati");
    }

    return (
        <Box
            component='form'
            sx={{
                position: 'relative',
                display: 'flex',
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 2,
                p: 2,
            }}
        >
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2}
                    sx={{
                        height: '100%',
                        width: '100%',
                        borderRadius: 2,
                    }}>
                    <Controller
                        name="nameUser"
                        control={control}
                        defaultValue={userSignIn.email}
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
                                    setUserSignIn(prev => ({ ...prev, emailUser: value }));
                                }}
                            />
                        )}
                    />
                    <Controller
                        name="passwordUser"
                        control={control}
                        defaultValue={userSignIn.password}
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
                                    setUserSignIn(prev => ({ ...prev, passwordUser: value }));
                                }}
                            />
                        )}
                    />
                </Stack>
            </form>
        </Box>
    );
};