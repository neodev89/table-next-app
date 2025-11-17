import dataExtrapolation from "@/utils/dataExtrapolation";
import { z } from "zod";


export const freelanceTableSchema = z.object({
    businessYearStart: z.string().refine(
        val => Date.parse(val)
    ),
    businessYearEnd: z.string().refine(
        val => Date.parse(val)
    ),
    companyStart: z.string().refine(
        val => Date.parse(val)
    ),
    companyEnd: z.string().refine(
        val => Date.parse(val)
    ),
});

export type freelanceTableSchemaProps = z.infer<typeof freelanceTableSchema>;
export const initializerFreelanceTable = dataExtrapolation({ schema: freelanceTableSchema });