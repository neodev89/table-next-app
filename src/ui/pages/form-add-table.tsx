"use client";
import { FC, useState } from "react"
import { freelanceTableSchema, freelanceTableSchemaProps, initializerFreelanceTable } from "@/zod/freelanceTable";
import { useDispatch } from "react-redux";
import ControlledTextField from "../components/controller-field/controllerFormField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { common } from "@mui/material/colors";
import { Box, Grid, TextField } from "@mui/material";


const FormAddTable: FC = () => {
    const [freelanceTableState, setFreelanceTableState] = useState<freelanceTableSchemaProps>(initializerFreelanceTable);
    const arrayInitialState = Object.entries(freelanceTableState).map(([K, V]) => ({
        [K]: V
    }));

    const fieldLabels: Record<string, string> = {
        businessYearStart: "Inizio anno fiscale",
        businessYearEnd: "Fine anno fiscale",
        companyStart: "Data di avvio azienda",
        companyEnd: "Data di chiusura azienda",
    };

    const { control, handleSubmit } = useForm<freelanceTableSchemaProps>({
        resolver: zodResolver(freelanceTableSchema),
    });

    const onSubmit = () => {
        console.log("OK")
    }

    return (
        <Box
            component={"form"}
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                backgroundColor: common.white,
            }}
        >
            <Grid container spacing={1} columns={4}>
                {
                    arrayInitialState.map((item, idx) => {
                        const description = Object.keys(item)[0];
                        console.log(description);
                        return (
                            <Grid size={4} key={`${idx}-${item}`}>
                                <Box sx={{
                                    position: "relative",
                                    display: "flex",
                                    flexDirection: "row",
                                    height: "5rem",
                                    width: "40%",
                                    alignItems: "center",
                                }}>
                                    <TextField
                                        value={`${fieldLabels[description]}`}
                                        disabled
                                        fullWidth
                                        sx={{
                                            mr: 1,
                                        }}
                                    />
                                    <ControlledTextField
                                        control={control}
                                        name={String(idx)}
                                        rules={{ required: `${description} is required` }}
                                        type={"date"}
                                        label={`${fieldLabels[description]}`}
                                        fullWidth={true}
                                    />
                                </Box>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
    )
};

export default FormAddTable