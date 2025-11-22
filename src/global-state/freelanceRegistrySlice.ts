import dataExtrapolation from "@/utils/dataExtrapolation";
import { signUpSchema, SignUpSchemaProps } from "@/zod/signUpSchema";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface FreelanceRegistryState {
  current: SignUpSchemaProps;
  history: SignUpSchemaProps[];
}

const initialState: FreelanceRegistryState = {
  current: dataExtrapolation({ schema: signUpSchema }),
  history: [],
};

const freelanceRegistrySlice = createSlice({
    name: "freelance-user-slice",
    initialState,
    reducers: {
        signUpNewFreelance: (state, action: PayloadAction<SignUpSchemaProps>) => {
            state.current = action.payload,
            state.history.push(action.payload)
        },
        updateFreelance: (state, action: PayloadAction<Partial<SignUpSchemaProps>>) => {
            Object.assign(state, action.payload);
        },
        removeFreelance: (state) => {
            state.current = dataExtrapolation({ schema: signUpSchema })
        }
    }
});

export const {
    signUpNewFreelance,
    updateFreelance,
    removeFreelance,
} = freelanceRegistrySlice.actions;

export default freelanceRegistrySlice.reducer;