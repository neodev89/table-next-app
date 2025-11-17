import { freelanceTableSchema, freelanceTableSchemaProps, initializerFreelanceTable } from "@/zod/freelanceTable";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface freelanceTableState {
    current: freelanceTableSchemaProps;
    history: freelanceTableSchemaProps[];
};

const initialState: freelanceTableState = {
    current: initializerFreelanceTable,
    history: [],
};

const freelanceTableSlice = createSlice({
    name: "freelance-table-slice",
    initialState,
    reducers: {
        updateFreelanceTable: (state, action: PayloadAction<freelanceTableSchemaProps>) => {
            state.current = action.payload,
            state.history.push(action.payload)
        },
        changeFreelanceTable: (state, action: PayloadAction<Partial<freelanceTableSchemaProps>>) => {
            for (const [key, value] of Object.entries(action.payload)) {
                (state as any)[key] = value
            }
        },
        removeFreelanceTable: (state) => {
            state.current = initializerFreelanceTable
        },
    },
});

export const {
    updateFreelanceTable,
    changeFreelanceTable,
    removeFreelanceTable,
} = freelanceTableSlice.actions;

export default freelanceTableSlice.reducer;