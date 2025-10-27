import { ZodObject } from "zod"

type storeState = {
    schema: ZodObject<any>;
    state: Record<any, any>;
}

type zodState = Record<string, storeState>;

/**
 * Payload tipi
 */
type RegisterSchemaPayload = {
  key: string;
  schema: ZodObject<any>;
};

type SetFieldPayload = {
  storeKey: string;
  path: string; // support semplice per campi top-level; estendibile per path nested
  value: any;
};

type ReplaceStatePayload = {
  storeKey: string;
  newState: Record<string, any>;
};

type ResetSchemaPayload = {
  storeKey: string;
};

export type {
    storeState,
    zodState,
    RegisterSchemaPayload,
    SetFieldPayload,
    ReplaceStatePayload,
    ResetSchemaPayload
}