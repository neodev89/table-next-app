import zodSlice from "./zodSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        zod: zodSlice,
    },
});

export default store;
export type RootZodState = ReturnType<typeof store.getState>;
