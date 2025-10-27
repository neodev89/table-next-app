import { ZodArray, ZodBoolean, ZodDate, ZodNumber, ZodObject, ZodString, z } from "zod";
import { ZodEffects } from "zod/v3";

type dataExtrapolationProps<T extends ZodObject<any>> = {
    schema: T;
}

export default function dataExtrapolation<T extends ZodObject<any>>({
    schema
}: dataExtrapolationProps<T>): z.infer<T> {

    const shape = schema.shape;
    let result: Record<string, any> = {};

    for (const key in shape) {
        const raw = shape[key];
        const base = raw instanceof ZodEffects ? raw._def.schema : raw;

        if (base instanceof ZodString) {
            result[key] = "";
        } else if (base instanceof ZodDate) {
            result[key] = new Date();
        } else if (base instanceof ZodBoolean) {
            result[key] = false;
        } else if (base instanceof ZodNumber) {
            result[key] = 0;
        } else if (base instanceof ZodArray) {
            result[key] = [];
        } else if (base instanceof ZodObject) {
            result[key] = {};
        } else {
            result[key] = null;
        }
    }

    return result as z.infer<T>;
}