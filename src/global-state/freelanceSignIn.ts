import dataExtrapolation from "@/utils/dataExtrapolation";
import { signInSchema, SignInSchemaProps } from "@/zod/signUpSchema";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SignInProps {
    signIn: SignInSchemaProps;
}

const initialState: SignInProps = {
    signIn: dataExtrapolation({ schema: signInSchema })
};

const freelanceSignIn = createSlice({
    name: "freelance-user-signIn-slice",
    initialState,
    reducers: {
        singInFreelance: (state, action: PayloadAction<SignInSchemaProps>) => {
            state.signIn = action.payload
        }
    },
});

export const {
    singInFreelance,
} = freelanceSignIn.actions;

export default freelanceSignIn.reducer;