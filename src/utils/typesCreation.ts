type Primitive =
    | string
    | number
    | symbol
    | Date
    | Function
    | null
    | undefined;

interface objectProps {
    [key: string | number | symbol]: valueType;
}

type valueType =
    | string
    | number
    | symbol
    | objectProps
    | Array<valueType>
    | boolean
    | Date
    | Function;

const typesCreation = <T extends Record<(string | number | symbol), valueType>>({
    type
}: { type: T }): T => {
    let result: Record<string | number | symbol, any> = {};
    for (const tipo in type) {
        const raw = type[tipo];
        if (typeof raw === "string") {
            result[tipo] = raw as string;
        } else if (typeof raw === "number") {
            result[tipo] = raw as number;
        } else if (typeof raw === "boolean") {
            result[tipo] = raw as boolean;
        } else if (typeof raw === "symbol") {
            result[tipo] = raw as symbol;
        } else if (raw === undefined) {
            result[tipo] = raw as undefined;
        } else if (raw instanceof Date) {
            result[tipo] = raw as Date;
        } else if (raw instanceof Function) {
            result[tipo] = raw as Function;
        } else if (typeof raw === "object" && raw !== null) {
            if (Array.isArray(raw)) {
                result[tipo] = raw as valueType[];
            } else {
                result[tipo] = typesCreation({ type: raw as objectProps }); // ricorsione
            }
        }
    }

    return result as T;
};