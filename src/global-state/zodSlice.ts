import dataExtrapolation from "@/utils/dataExtrapolation";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RegisterSchemaPayload, ReplaceStatePayload, ResetSchemaPayload, SetFieldPayload, zodState } from "./typeZodSchema";

const initialState: zodState = {};

const ZodSlice = createSlice({
    name: "zod-slice",
    initialState: initialState,
    reducers: {
        registerSchema: (state, action: PayloadAction<RegisterSchemaPayload>) => {
            const { key, schema } = action.payload;
            // crea uno stato iniziale con dataExtrapolation
            const initial = dataExtrapolation({ schema });
            state[key] = { schema, state: initial };
        },

        unregisterSchema: (state, action: PayloadAction<{ key: string }>) => {
            const { key } = action.payload;
            delete state[key];
        },

        setField(state, action: PayloadAction<SetFieldPayload>) {
            const { storeKey, path, value } = action.payload;
            const store = state[storeKey];
            if (!store) return;
            // path semplice top-level; se serve nested, aggiungi utilità per path split
            store.state[path] = value;
        },

        updateState(state, action: PayloadAction<ReplaceStatePayload>) {
            const { storeKey, newState } = action.payload;
            const store = state[storeKey];
            if (!store) return;
            // sovrascrive lo stato attuale del record (ma mantiene lo schema)
            store.state = { ...store.state, ...newState };
        },

        resetToSchema(state, action: PayloadAction<ResetSchemaPayload>) {
            const { storeKey } = action.payload;
            const store = state[storeKey];
            if (!store) return;
            store.state = dataExtrapolation({ schema: store.schema });
        },

        removeField(state, action: PayloadAction<{ storeKey: string; path: string }>) {
            const { storeKey, path } = action.payload;
            const store = state[storeKey];
            if (!store) return;
            delete store.state[path];
        },
    },
});

export const {
    registerSchema,
    unregisterSchema,
    setField,
    updateState,
    resetToSchema,
    removeField
} = ZodSlice.actions;

export default ZodSlice.reducer;