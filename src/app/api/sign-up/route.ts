import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { v4 as uuidv4 } from "uuid";
import { getInitializedAppData } from "@/connection/data-source";
import { FreelanceRegistryEntity } from "@/entity/freelanceRegistry";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getCookiesOptions } from "@/utils/getCookiesOptions";

const signSecret = process.env.JWT_SECRET!;

export async function POST(req: Request) {
    const {
        name,
        lastName,
        taxID,
        vatNumber,
        birth,
        birthCity,
        country,
        email,
        password
    } = await req.json();

    const dataSource = await getInitializedAppData();
    const findFreelancer = dataSource.getRepository(FreelanceRegistryEntity);
    const foundFreelancer = await findFreelancer.findOneBy({ emailUser: email });

    if (foundFreelancer && foundFreelancer.passwordUser) {
        return NextResponse.redirect(new URL(`/login?from=signup`, req.url));

    } else {

        const hashedPassword = await bcrypt.hash(password, 15);

        const newRepo = findFreelancer.create({
            freelanceRegistryID: uuidv4(),
            nameUser: name,
            lastNameUser: lastName,
            taxID,
            vatNumber,
            birthUser: birth,
            birthCityUser: birthCity,
            countryUser: country,
            emailUser: email,
            passwordUser: hashedPassword,
        });

        await findFreelancer.save(newRepo);

        const token = jwt.sign(
            newRepo,
            signSecret,
            {
                expiresIn: 2 * 24 * 60 * 60,
            },
        );

        const storedCookies = await cookies();
        storedCookies.set(
            "registered_token",
            token,
            getCookiesOptions({
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: "lax",
                path: "/",
                maxAge: 2 * 24 * 60 * 60,
            }),
        );

        return NextResponse.json({
            success: true,
            message: "Access consent",
        });
    };
};