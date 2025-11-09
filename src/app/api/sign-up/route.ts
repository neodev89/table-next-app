import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { getInitializedAppData } from "@/connection/data-source";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getCookiesOptions } from "@/utils/getCookiesOptions";
import { FreelanceRegistry } from "@/entity/freelanceRegistry";

const signSecret = process.env.JWT_SECRET!;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("I dati del body sono: ", body)

    const dataSource = await getInitializedAppData([FreelanceRegistry]);
    // console.log(dataSource);

    const repo = dataSource.getRepository(FreelanceRegistry);
    // console.log(repo);

    const existing = await repo.findOneBy({ emailUser: body.emailUser });
    // console.log(existing ?? "Nessuno");

    if (existing && existing.passwordUser) {
      return NextResponse.json({
        success: false,
        redirect: "/login?from=signup",
        message: "Utente già registrato",
      }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(body.passwordUser, 15);
    const newUser = repo.create({
      nameUser: body.nameUser,
      lastNameUser: body.lastNameUser,
      taxID: body.taxID,
      vatNumber: body.vatNumber,
      birthUser: body.birthUser,
      birthCityUser: body.birthCityUser,
      countryUser: body.countryUser,
      emailUser: body.emailUser,
      passwordUser: hashedPassword,
    });

    await repo.save(newUser);

    const token = jwt.sign(
      { freelanceRegistryID: newUser.freelanceRegistryID, emailUser: newUser.emailUser },
      signSecret,
      { expiresIn: 2 * 24 * 60 * 60 }
    );

    (await cookies()).set(
      "registered_token",
      token,
      getCookiesOptions({
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: "lax",
        path: "/",
        maxAge: 2 * 24 * 60 * 60,
      })
    );

    return NextResponse.json({
      success: true,
      message: "Access consent",
    });

  } catch (err) {
    console.error("Errore nella registrazione:", err);
    return NextResponse.json({
      success: false,
      message: "Errore interno del server",
    }, { status: 500 });
  }
}
