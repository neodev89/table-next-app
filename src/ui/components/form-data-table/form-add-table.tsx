"use client";

import MappingTextField from "../custom-textField/mappingTextField";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { FC, useState } from "react"
import { freelanceTableSchema, freelanceTableSchemaProps, initializerFreelanceTable } from "@/zod/freelanceTable";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { common } from "@mui/material/colors";
import { Box, Button, Grid, IconButton, Stack } from "@mui/material";
import { montserrat } from "@/app/fonts";
import CarouselData from "../carousel/CarouselForm";
import CarouselBusiness from "../carousel/CarouselBusiness";

interface formProps {
    classNameBoxCarousel: string;
    classNameActionCarousel: string;
}

const FormAddTable = ({
    classNameBoxCarousel,
    classNameActionCarousel
}: formProps) => {

    const { control, handleSubmit } = useForm<freelanceTableSchemaProps>({
        resolver: zodResolver(freelanceTableSchema),
    });

    const [currentIdx, setCurrentIdx] = useState<number>(0);

    const carousel = [
        {
            id: "table-data",
            component: <CarouselData
                control={control}
                initializerFreelanceTable={initializerFreelanceTable}
            />
        },
        {
            id: "table-business",
            component: <CarouselBusiness />
        }
    ];

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
                height: "100%",
                border: "1px solid lightgrey",
                borderRadius: 4,
                p: 2,
            }}
        >
            <Stack spacing={2}
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
                   
                </Box>
                <Box className={classNameBoxCarousel}>
                    <Box className={classNameActionCarousel}>
                        <IconButton onClick={() => {
                            if (currentIdx > 1) {
                                setCurrentIdx(0)
                            }
                            setCurrentIdx(currentIdx + 1);
                        }}>
                            <KeyboardArrowLeftIcon />
                        </IconButton>
                        <IconButton onClick={() => {
                            if (currentIdx === 0) {
                                setCurrentIdx(0)
                            }
                            setCurrentIdx(currentIdx - 1)
                        }}>
                            <KeyboardArrowRightIcon />
                        </IconButton>
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