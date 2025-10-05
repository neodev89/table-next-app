import { GridColDef, GridRowIdGetter, GridRowSpacing, GridRowSpacingParams } from "@mui/x-data-grid";

type GridColsVisibility = GridColDef & {
    visibility: boolean;
}

interface tableType<TRow> {
    columns: Array<GridColsVisibility>;
    rows: Array<TRow>;
    filterMode: "client" | "server";
    getRowId: GridRowIdGetter<any>;
    getRowSpacing?: ((params: GridRowSpacingParams) => GridRowSpacing) | undefined;
}

export type {
    tableType,
}