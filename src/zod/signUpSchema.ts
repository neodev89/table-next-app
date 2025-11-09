import { z } from "zod";
import { emailUserSchema, passwordUserSchema } from "./reusableSchemaUser";
import dataExtrapolation from "@/utils/dataExtrapolation";

export const signUpSchema = z.object({
    nameUser: z.string(),
    lastNameUser: z.string(),
    taxID: z.string(),
    vatNumber: z.string(),
    birthUser: z.string().refine(
        val => Date.parse(val)
    ),
    birthCityUser: z.string(),
    countryUser: z.string(),
    emailUser: emailUserSchema,
    passwordUser: passwordUserSchema,
});

export const signInSchema = z.object({
    email: emailUserSchema,
    password: passwordUserSchema,
});

export type SignUpSchemaProps = z.infer<typeof signUpSchema>;
export type SignInSchemaProps = z.infer<typeof signInSchema>;
export const initializerSignUpUser = dataExtrapolation({ schema: signUpSchema });
export const initializerSignInUser = dataExtrapolation({ schema: signInSchema });

