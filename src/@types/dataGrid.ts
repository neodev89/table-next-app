import { GridColDef, GridPaginationModel, GridCallbackDetails, GridCellParams, MuiEvent } from "@mui/x-data-grid";

type GridDefVisibility = GridColDef & {
    visibility: boolean;
    width: number;
    minWidth: number;
}

interface dataGridProps<T> {
    columns: GridDefVisibility[];
    rows: T[];
    paginationMode: 'server' | 'client';
    paginationModel: { page: number, pageSize: number };
    onPaginationModelChange: (model: GridPaginationModel, details: GridCallbackDetails) => void;
    page: number;
    setPage: (page: number) => void;
    pageSize: number;
    setPageSize: (pageSize: number) => void;
    refetchData: (page: number, pageSize: number) => void;
    checkboxSelection?: boolean;
    autoHeight?: boolean;
    filterMode?: 'server' | 'client';
    gridRowId?: (row: T) => number;
    onCellDoubleClick?: (params: GridCellParams, event: MuiEvent<React.MouseEvent>, details: GridCallbackDetails) => void;
}

export type {
    GridDefVisibility, 
    dataGridProps,
}