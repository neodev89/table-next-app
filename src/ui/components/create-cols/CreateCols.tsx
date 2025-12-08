import { GridDefVisibility } from "@/@types/dataGrid"

interface columnsParams {
    columns: GridDefVisibility[];
}

const CreateCols = ({
    columns
}: columnsParams) => {

    return (
        <>
            {
                columns.map((item, idx) => {
                    const colsField = {
                        id: idx,
                        field: item.field,
                        headerName: item.headerName,
                        width: item.width,
                        minWidth: item.minWidth,
                        visibility: item.visibility
                    };
                    return colsField;
                })
            }
        </>
    );
};

export default CreateCols;