import Logout from "@/lib/middlewareLogout";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
    const cookie = await cookies();
    const cookieStore = cookie.get("auth_token");

    if (!cookieStore) {
        return NextResponse.json({
            success: false,
            message: "Token mancante",
        }, { status: 401 });
    }

    try {
        // verifica il cookie
        const decoded = await Logout();

        // Invalida il token
        cookie.set("auth_token", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: "strict",
            path: "/",
            maxAge: 0,
        });

        return NextResponse.json({
            success: true,
            message: "Logout effettuato",
            user: decoded.emailUser, // opzionale: conferma chi è stato sloggato
        });

    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Token non valido o scaduto" },
            { status: 401 }
        );
    }
};