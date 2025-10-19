"use client";

import { FreelanceRegistry } from "@/@types/freelanceRegistry";
import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

type signUpProps = Omit<FreelanceRegistry, "freelanceRegistryID">;

export default function SignUp() {
    const [signUp, setSignUp] = useState<signUpProps>({
        nameUser: "",
        lastNameUser: "",
        taxID: "",
        vatNumber: "",
        birthUser: new Date(),
        birthCityUser: "",
        countryUser: "",
        emailUser: "",
        passwordUser: "",
    });
    const { control, handleSubmit } = useForm();

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
            <Stack spacing={2} 
                sx={{
                    height: '100%',
                    width: '100%',
                    borderRadius: 2,
                }}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                    </form>
                </Stack>
        </Box>
    )
}