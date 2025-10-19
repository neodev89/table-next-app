import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { v4 as uuidv4 } from "uuid";
import { getInitializedAppData } from "@/connection/data-source";
import { FreelanceRegistryEntity } from "@/entity/freelanceRegistry";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const signToken = process.env.JWT_SECRET!;

// API POST per salvare l'utente
export async function POST(req: Request) {
    const { email, password } = await req.json();

    const dataSource = await getInitializedAppData();
    const findFreelance = dataSource.getRepository(FreelanceRegistryEntity);
    const freelancer = await findFreelance.findOneBy({ emailUser: email });

    if (!freelancer) {
        return NextResponse.json({
            success: false,
            message: 'User not found!',
        });
    } else {
        const validatorPassword = bcrypt.compare(freelancer.passwordUser, password);

        if (!(await validatorPassword)) {
            return NextResponse.json({
                success: false,
                message: 'Password is wrong!',
            });
        }
        
        const freelancerID = uuidv4();

        const freelanceRegistryAccess: { freelanceRegistryID: string, emailUser: string } = {
            freelanceRegistryID: freelancerID,
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
};