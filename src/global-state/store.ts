import zodSlice from "./zodSlice";
import freelanceSliceRegister from "./freelanceRegistrySlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        zod: zodSlice,
        freelanceRegister: freelanceSliceRegister,
    },
});

export default store;
export type RootZodState = ReturnType<typeof store.getState>;
