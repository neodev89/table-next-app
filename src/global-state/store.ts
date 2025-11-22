import zodSlice from "./zodSlice";
import freelanceSliceRegister from "./freelanceRegistrySlice";
import loading from "./loadingSetting";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        zod: zodSlice,
        freelanceRegister: freelanceSliceRegister,
        loaded: loading,
    },
});

export default store;
export type RootZodState = ReturnType<typeof store.getState>;
