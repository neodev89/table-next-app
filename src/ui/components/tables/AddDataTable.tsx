"use client";
import FormAddTable from "@/ui/pages/form-add-table";
import style from "../../../app/table-customer/style.module.sass";
import storePersist from "@/global-state/persist-store";

import { Stack, Box, Typography, Button, CircularProgress } from "@mui/material";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootZodState } from "@/global-state/store";
import { updateLogoutLoading } from "@/global-state/loadingSetting";
import { montserrat } from "@/app/fonts";

const AddDataTable = () => {
    {/**Qui andranno inseriti i dati per popolare il database
        con tutte le info necessarie per l'app */}
    const dispatch = useDispatch();
    const loaded = useSelector((state: RootZodState) => state.loaded.loading);

    storePersist.subscribe(() => {
        console.log("Stato aggiornato:", storePersist.getState());
    });

    const handleLogout = async () => {
        dispatch(updateLogoutLoading(true));
        const res = await fetch("/api/logout", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (res.ok) {
            dispatch(updateLogoutLoading(false));
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
                        backgroundColor: "transparent"
                    }} spacing={2}>
                        <Box className={style.title}>
                            <Box className={style.boxTitle}>
                                <Typography variant="h3" className={style.textTitle}>
                                    <strong>Table</strong>
                                </Typography>
                            </Box>
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
                ) : <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    width: '100vw',
                    border: '3px solid red'
                }}>
                    <CircularProgress size={80} color="info" />
                </Box>
            }
        </>
    )
};

export default AddDataTable;