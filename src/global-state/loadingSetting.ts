import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface loadingSettingProps {
    loading: boolean;
    logoutLoading: boolean;
}

const initialState: loadingSettingProps = {
    loading: false,
    logoutLoading: false,
};

const loadingSetSlice = createSlice({
    name: "loading-set",
    initialState,
    reducers: {
        updateLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        updateLogoutLoading: (state, action: PayloadAction<boolean>) => {
            state.logoutLoading = action.payload
        }
    },
});

export const {
    updateLoading,
    updateLogoutLoading,
} = loadingSetSlice.actions;

export default loadingSetSlice.reducer;
