"use client";
import CodeHome from "@/ui/components/code-home/codeHome";
import { updateLogoutLoading } from "@/global-state/loadingSetting";
import { RootZodState } from "@/global-state/store";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Box, CircularProgress } from "@mui/material";

const Home = () => {
    const [login, setLogin] = useState<boolean>(true);
    const dispatch = useDispatch();
    const loadedLoading = useSelector((state: RootZodState) => state.loaded.logoutLoading);

    useEffect(() => {
        dispatch(updateLogoutLoading(false));
        console.log(loadedLoading);
        console.log(login);
    }, [dispatch]);

    const setterLoading = useCallback(() => {
        dispatch(updateLogoutLoading(!loadedLoading));
    }, [loadedLoading]);

    return (
        <>
            {
                loadedLoading ? (
                    <Box sx={{
                        display: 'flex',
                        height: '100%',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <CircularProgress size={80} sx={{
                            justifyContent: 'center',
                            color: 'error'
                        }} />
                    </Box>
                ) : (
                    <CodeHome login={login} setLogin={setLogin} />
                )
            }
        </>
    );
}

export default Home;