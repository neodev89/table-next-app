import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { getInitializedAppData } from "@/connection/data-source";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { SignIn } from "@/entity/signIn";
import { FreelanceRegistry } from "@/entity/freelanceRegistry";

const signToken = process.env.JWT_SECRET!;

// API POST per salvare l'utente
export async function POST(req: Request) {
    try {

        {/** Il confronto è errato! SignIn è vuoto e, per essere 
            validato l'utente, la comparazione dovrà essere eseguita 
            tra i dati del body e i riferimenti di freelanceRegistry */}
        const body = await req.json();
        console.log("I dati del body sono: ", body);

        const dataSource = await getInitializedAppData([SignIn, FreelanceRegistry]);
        const findFreelance = dataSource.getRepository(FreelanceRegistry);
        const freelancer = await findFreelance.findOneBy({ emailUser: body.emailUser });

        if (!freelancer) {
            return NextResponse.json({
                success: false,
                message: 'User not found!',
            });
        } else {
            let validatorPassword = await bcrypt.compare(
                body.passwordUser, freelancer.passwordUser
            );
            if (!validatorPassword) {
                return NextResponse.json({
                    success: false,
                    message: 'Password is wrong!',
                });
            }

            const signInRepo = dataSource.getRepository(SignIn);
            let signIn = await signInRepo.findOneBy({ emailUser: body.emailUser });
            if (!signIn) {
                const hashedPass = await bcrypt.hash(body.passwordUser, 15);
                signIn = signInRepo.create({
                    emailUser: body.emailUser,
                    passwordUser: hashedPass,
                    freelanceRegistryID: freelancer.freelanceRegistryID,
                });
                await signInRepo.save(signIn);
            } else {
                // se c'è già, assicurati che il 
                // riferimento a freelanceRegistryID sia aggiornato
                if (!signIn.freelanceRegistryID) {
                    signIn.freelanceRegistryID = freelancer.freelanceRegistryID;
                    await signInRepo.save(signIn);
                }
            }

            // assicurati che signToken sia presente
            if (!signToken) throw new Error("JWT_SECRET not defined");

            // scegli i campi minimi da includere nel token
            const payload = {
                signInID: signIn.signInID,
                emailUser: signIn.emailUser,
                freelanceRegistryID: signIn.freelanceRegistryID,
            };

            const token = jwt.sign(
                payload,
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
                redirectTo: "/table-customer"
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