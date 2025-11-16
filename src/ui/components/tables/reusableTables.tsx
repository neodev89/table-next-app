import { DataGrid } from "@mui/x-data-grid";
import styles from "./style_table.sass";
import { Box } from "@mui/material";
import { tableType } from "./table-type";

const ReusableTable = <TRow,>({
    columns, rows,
    filterMode, getRowId, getRowSpacing,

}: tableType<TRow>) => {
    return (
        <Box className={styles.style_table}>
            <Box className={styles.box_table}>
                <DataGrid 
                    columns={columns}
                    rows={rows}
                    getRowId={getRowId}
                    pagination={true}
                    checkboxSelection
                    filterMode={filterMode}
                    getRowSpacing={getRowSpacing || undefined}
                />
            </Box>
        </Box>
    );
};

export default ReusableTable;