"use client";
import style from "./style.module.sass";
import { Stack, Box, Typography, Button } from "@mui/material";
import { common } from "@mui/material/colors";
import Link from "next/link";

const AddDataTable = () => {
    {/**Qui andranno inseriti i dati per popolare il database
        con tutte le info necessarie per l'app */}

    return (
        <Stack className={style.containerTable} sx={{
            backgroundColor: common.black
        }} spacing={2}>
            <Box className={style.title}>
                <Typography variant="h3" className={style.textTitle}>
                    Table
                </Typography>
                <Link href={"/"}>
                    <Button
                        variant="contained"
                        color="primary"
                    >
                        Indietro
                    </Button>
                </Link>
            </Box>
            <Box className={style.table_div}>
                <Typography variant="h5" className={style.textTitle}>
                    Form inserimento dati
                </Typography>
            </Box>
        </Stack>
    )
};

export default AddDataTable;