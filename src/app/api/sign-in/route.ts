import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { getInitializedAppData } from "@/connection/data-source";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { SignIn } from "@/entity/signIn";

const signToken = process.env.JWT_SECRET!;

// API POST per salvare l'utente
export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log("I dati del body sono: ", body);

        const dataSource = await getInitializedAppData([SignIn]);
        const findFreelance = dataSource.getRepository(SignIn);
        const freelancer = await findFreelance.findOneBy({ emailUser: body.emailUser });

        if (!freelancer) {
            return NextResponse.json({
                success: false,
                message: 'User not found!',
            });
        } else {
            let validatorPassword = await bcrypt.compare(body.passwordUser, freelancer.passwordUser);
            if (!validatorPassword) {
                return NextResponse.json({
                    success: false,
                    message: 'Password is wrong!',
                });
            }

            const freelanceRegistryAccess: { freelanceRegistryID: string, emailUser: string } = {
                freelanceRegistryID: freelancer.freelanceRegistryID,
                emailUser: freelancer.emailUser,
            };

            const token = jwt.sign(
                freelanceRegistryAccess,
                signToken,
                {
                    expiresIn: "2d"
                },
            );

            const cookieStore = await cookies();
            cookieStore.set(
                "auth_token",
                token,
                {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'strict',
                    path: "/",
                    maxAge: 2 * 24 * 60 * 60,
                }
            );

            return NextResponse.json({
                success: true,
                message: "Login successful!"
            });
        };
    } catch (error) {
        console.error("Errore nella registrazione:", error);
        return NextResponse.json({
            success: false,
            message: "Errore interno del server",
        }, { status: 500 });
    }
};