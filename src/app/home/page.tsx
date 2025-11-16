"use client";
import CodeHome from "@/ui/components/code-home/codeHome";
import store from "@/global-state/store";
import theme from "@/themeMui";
import { ThemeProvider } from "@mui/material"
import { useEffect, useState } from "react";
import { Provider } from "react-redux";

const Home = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [login, setLogin] = useState<boolean>(true);

    useEffect(() => {
        setLogin(false);
        setLoading(false);
    }, []);

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CodeHome login={login} setLogin={setLogin} loading={loading} />
            </ThemeProvider>
        </Provider>
    );
}

export default Home;