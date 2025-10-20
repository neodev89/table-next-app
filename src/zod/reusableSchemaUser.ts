import { z } from "zod";

const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export const emailUserSchema = z.string()
    .pipe(z.email({ pattern: regexEmail }));

export const passwordUserSchema = z.string()
    .min(8, "8 chars minimum")
    .max(12, "12 chars maximum")
    .regex(/[A-Z]/, "Almeno una lettera maiuscola")
    .regex(/[a-z]/, "Almeno una lettera minuscola")
    .regex(/[0-9]/, "Almeno un numero")
    .regex(/^[A-Za-z0-9]/, "Almeno un carattere speciale")
    ;
