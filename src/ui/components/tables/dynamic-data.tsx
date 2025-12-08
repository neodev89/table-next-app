import { dataGridProps } from "@/@types/dataGrid";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

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