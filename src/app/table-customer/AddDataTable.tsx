"use client";
import FormAddTable from "@/ui/pages/form-add-table";
import style from "./style.module.sass";
import { Stack, Box, Typography, Button, CircularProgress } from "@mui/material";
import { common } from "@mui/material/colors";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootZodState } from "@/global-state/store";
import { useState } from "react";
import { updateLogoutLoading } from "@/global-state/loadingSetting";

const AddDataTable = () => {
    {/**Qui andranno inseriti i dati per popolare il database
        con tutte le info necessarie per l'app */}
    const dispatch = useDispatch();
    const loaded = useSelector((state: RootZodState) => state.loaded.logoutLoading);

    const handleLogout = async () => {
        dispatch(updateLogoutLoading(true));
        const res = await fetch("/api/logout", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (res.ok) {
            redirect("/");
        } else {
            dispatch(updateLogoutLoading(false));
            return;
        }
    };

    return (
        <>
            {
                !loaded ? (
                    <Stack className={style.containerTable} sx={{
                        backgroundColor: common.black
                    }} spacing={2}>
                        <Box className={style.title}>
                            <Typography variant="h3" className={style.textTitle}>
                                Table
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>
                        </Box>
                        <Box className={style.table_div}>
                            <FormAddTable />
                        </Box>
                    </Stack>
                ) : <CircularProgress />
            }
        </>
    )
};

export default AddDataTable;