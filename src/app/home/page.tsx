"use client";
import CodeHome from "@/ui/components/code-home/codeHome";
import { useEffect, useState } from "react";

const Home = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [login, setLogin] = useState<boolean>(true);

    useEffect(() => {
        setLogin(false);
        setLoading(false);
    }, []);

    return (
        <CodeHome login={login} setLogin={setLogin} loading={loading} />
    );
}

export default Home;