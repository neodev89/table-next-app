"use client";
import ControlledTextField from "../components/controller-field/controllerFormField";

import { FC } from "react"
import { freelanceTableSchema, freelanceTableSchemaProps, initializerFreelanceTable } from "@/zod/freelanceTable";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { common } from "@mui/material/colors";
import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import { montserrat } from "@/app/fonts";
import MappingTextField from "../components/custom-textField/mappingTextField";

const FormAddTable: FC = () => {
    const arrayInitialState = Object.entries(initializerFreelanceTable).map(([K, V]) => ({
        [K]: V
    }));

    const fieldLabels: Record<string, string> = {
        businessYearStart: "Inizio anno fiscale",
        businessYearEnd: "Fine anno fiscale",
        companyStart: "Data di avvio anno aziendale",
        companyEnd: "Data di fine anno aziendale",
    };

    const { control, handleSubmit } = useForm<freelanceTableSchemaProps>({
        resolver: zodResolver(freelanceTableSchema),
    });

    const onSubmit = () => {
        console.log("OK")
    };

    return (
        <Box
            component={"form"}
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                backgroundColor: "transparent",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "calc(100vh - 150px)",
                border: "3px solid orange",
            }}
        >
            <Stack spacing={2}>
                <Box sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    height: "100%",
                    width: "100%",
                    justifyContent: "center",
                }}>
                    <Box sx={{
                        position: "relative",
                        display: "flex",
                        height: "100%",
                        width: "50%",
                        flexDirection: "row",
                        justifyContent: "center",
                        border: "2px solid blue",
                        backgroundColor: common.white,
                        p: 1,
                        borderRadius: 4,
                    }}>
                        <Grid container spacing={1} columns={4}>
                            {
                                arrayInitialState.map((item, idx) => {
                                    const description = Object.keys(item)[0];
                                    console.log(description);
                                    return (
                                        <Grid size={4} key={`${idx}-${item}`}>
                                            <MappingTextField
                                                control={control}
                                                name={String(idx)}
                                                rules={{ required: `${description} is required` }}
                                                type={"date"}
                                                label={`${fieldLabels[description]}`}
                                                fullWidth={true}
                                                fieldLabel={`${fieldLabels[description]}`}
                                                visible={true}
                                            />
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                </Box>
                <Box sx={{
                    position: "relative",
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    pr: 2,
                }}>
                    <Button type="submit" variant="contained" sx={{
                        height: "3rem",
                        width: "8rem",
                        fontFamily: montserrat,
                    }}>
                        Invia
                    </Button>
                </Box>
            </Stack >
        </Box >
    )
};

export default FormAddTable