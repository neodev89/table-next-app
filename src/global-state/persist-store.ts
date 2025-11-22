import storage from "redux-persist/lib/storage";
import freelanceReducer,
{
    type FreelanceRegistryState
} from "../global-state/freelanceRegistrySlice";
import {
    persistStore,
    persistReducer,
    PersistConfig,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    createTransform,
} from "redux-persist";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { signUpSchema } from "@/zod/signUpSchema";
import dataExtrapolation from "@/utils/dataExtrapolation";

// Transform: valida con Zod al momento della reidratazione
const freelanceTransform = createTransform<FreelanceRegistryState, FreelanceRegistryState>(
    (inboundState) => inboundState, // prima di salvare: nessuna modifica
    (outboundState) => {
        try {
            // validazione con Zod
            const current = signUpSchema.parse(outboundState.current);
            const history = Array.isArray(outboundState.history)
                ? outboundState.history.map((h) => signUpSchema.parse(h))
                : [];
            return { current, history };
        } catch {
            // fallback sicuro se i dati persistiti non rispettano lo schema
            return {
                current: dataExtrapolation({ schema: signUpSchema }),
                history: []
            };
        }
    },
    { whitelist: ["current", "history"] }
);

const freelanceRegistrySliceConfig: PersistConfig<FreelanceRegistryState> = {
    key: "freelanceRegistry",
    storage,
    whitelist: ["current", "history"],
    transforms: [freelanceTransform],
    version: 1, // incrementa se cambi la shape dello stato
};

const rootRegistryReducer = combineReducers({
    // qui la proprietà rappresenta la chiave nello state
    freelanceRegistry: persistReducer(freelanceRegistrySliceConfig, freelanceReducer),
});

export const store = configureStore({
    reducer: rootRegistryReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
