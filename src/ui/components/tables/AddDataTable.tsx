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
import { useCallback, useState } from "react";
import ModalBusiness from "../modals/ModalBusiness";


const AddDataTable = () => {
    {/**Qui andranno inseriti i dati per popolare il database
        con tutte le info necessarie per l'app */}
    const [open, setOpen] = useState<boolean>(false);
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

    const handleClose = useCallback(() => {
        setOpen(false);
    }, [open]);

    return (
        <>
            {
                !loaded ? (
                    <Stack className={style.containerTable} sx={{
                        backgroundColor: "rgb(0, 0, 94)"
                    }} spacing={2}>
                        <Box className={style.title}>
                            <Box className={style.boxTitle}>
                                <Typography variant="h2" className={style.textTitle}>
                                    <strong>Table</strong>
                                </Typography>
                            </Box>
                        </Box>
                        <Box className={style.buttonsDiv}>
                            <Box className={style.table_div}>
                                <Button variant="contained" color="primary"
                                    onClick={() => setOpen(true)}
                                >
                                    Modale
                                </Button>
                            </Box>
                            <Box className={style.logout}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </Button>
                            </Box>
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
            <ModalBusiness
                open={open}
                setOpen={setOpen}
                closed={handleClose}
                className={style.table_div}
            />
        </>
    )
};

export default AddDataTable;