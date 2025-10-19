import { z } from "zod";
import { emailUserSchema, passwordUserSchema } from "./reusableSchemaUser";

export const signUpSchema = z.object({
    nameUser: z.string(),
    lastNameUser: z.string(),
    taxID: z.string(),
    vatNumber: z.string(),
    birthUser: z.date(),
    birthCityUser: z.string(),
    countryUser: z.string(),
    emailUser: emailUserSchema,
    passwordUser: passwordUserSchema,
});

export type SignUpSchemaProps = z.infer<typeof signUpSchema>;

