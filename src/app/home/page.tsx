"use client";
import CodeHome from "@/ui/components/code-home/codeHome";

import { updateLogoutLoading } from "@/global-state/loadingSetting";
import { RootZodState } from "@/global-state/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Box, Typography } from "@mui/material";
import { SafeDynamicCircular } from "@/ui/components/client-only-wrapper";

const Home = () => {
    const [login, setLogin] = useState<boolean>(true);
    const dispatch = useDispatch();
    const loadedLoading = useSelector((state: RootZodState) => state.loaded.logoutLoading);

    useEffect(() => {
        dispatch(updateLogoutLoading(false));
        console.log(loadedLoading);
        console.log(login);
    }, [dispatch]);

    // const setterLoading = useCallback(() => {
    //     dispatch(updateLogoutLoading(!loadedLoading));
    // }, [loadedLoading]);

    return (
        <>
            {
                loadedLoading ? (
                    <Box sx={{
                        display: 'flex',
                        height: 'calc(100vh - 100px)',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <SafeDynamicCircular size={80} sx={{
                            justifyContent: 'center',
                            color: 'error'
                        }} />
                        <Typography variant="body1" color="secondary">
                            ...Wait few seconds
                        </Typography>
                    </Box>
                ) : (
                    <CodeHome login={login} setLogin={setLogin} />
                )
            }
        </>
    );
}

export default Home;