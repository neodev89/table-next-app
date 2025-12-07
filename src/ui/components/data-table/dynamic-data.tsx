import { Box } from "@mui/material";
import { DataGrid, GridCallbackDetails, GridCellParams, GridColDef, GridPaginationModel, MuiEvent } from "@mui/x-data-grid";

type GridDefVisibility = GridColDef & {
    visibility: boolean;
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

const DynamicDataGrid = <T,>({
    columns,
    rows,
    paginationMode,
    paginationModel,
    page,
    pageSize,
    onPaginationModelChange,
    setPage,
    setPageSize,
    refetchData,
    ...other
}: dataGridProps<T>) => {

    return (
        <Box sx={{
            position: "relative",
            display: "flex",
            height: "100%",
            width: "100%",
            justifyContent: "center",
        }}>
            <DataGrid
                columns={columns}
                rows={rows}
                paginationMode={paginationMode}
                paginationModel={{page, pageSize}}
                onPaginationModelChange={(model) => {
                    setPage(model.page)
                    setPageSize(model.pageSize)
                    refetchData(model.page, model.pageSize)
                }}
                {...other}
            />
        </Box>
    );
};

export default DynamicDataGrid;