"use client";

// import MappingTextField from "../custom-textField/mappingTextField";
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { useState } from "react"
import { freelanceTableSchema, freelanceTableSchemaProps, initializerFreelanceTable } from "@/zod/freelanceTable";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Stack } from "@mui/material";
import { montserrat } from "@/app/fonts";
import CarouselData from "../carousel/CarouselForm";
import CarouselBusiness from "../carousel/CarouselBusiness";
import BasicTabs from "../basic-tabs/Basictabs";

const FormAddTable = () => {
    const { control, handleSubmit } = useForm<freelanceTableSchemaProps>({
        resolver: zodResolver(freelanceTableSchema),
    });

    const carousel = [
        {
            value: "table-data",
            label: "Inizio e fine attività",
            children: <CarouselData
                control={control}
                initializerFreelanceTable={initializerFreelanceTable}
            />
        },
        {
            value: "table-business",
            label: "fatture attività",
            children: <CarouselBusiness />
        }
    ];

    const [currentValue, setCurrentValue] = useState<string>(carousel[0].value);


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
                height: "80%",
                border: "1px solid lightgrey",
                borderRadius: 4,
                p: 2,
            }}
        >
            <Stack spacing={1}
                sx={{
                    height: "100%",
                    width: "100%",
                }}>
                <Box sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    height: "100%",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: 'hidden',
                }}>
                    <BasicTabs 
                        tabsData={carousel} 
                        currentValue={currentValue} 
                        value={currentValue}
                        setValue={setCurrentValue}    
                    />
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