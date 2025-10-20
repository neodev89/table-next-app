"use client";
import styles from "./styles.module.sass";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignUpSchemaProps } from "@/zod/signUpSchema";
import { FreelanceRegistry } from "@/@types/freelanceRegistry";
import { Box, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";


export default function SignUp() {
   
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
                        defaultValue={""}
                        rules={{ required: "Email obbligatoria" }}
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                label="email"
                                type="email"
                                fullWidth
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                    <Controller
                        name="passwordUser"
                        control={control}
                        defaultValue={""}
                        rules={{ required: "Password obbligatoria" }}
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                label="password"
                                type="password"
                                fullWidth
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </Stack>
            </form>
        </Box>
    )
}