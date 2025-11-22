import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export default async function Logout() {
    const cookie = await cookies();
    const cookieStore = cookie.get("auth_token");
    if (!cookieStore) throw new Error("token mancante");

    try {
        const decoded = jwt.verify(cookieStore.value, process.env.JWT_SECRET!) as {
            signInID: string;
            emailUser: string;
            freelanceRegistryID: string; 
        };
        return decoded;
    } catch (error) {
        throw new Error("Token non valido o scaduto");
    }
};