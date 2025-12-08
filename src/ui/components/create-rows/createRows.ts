import { businessDataType } from "@/@types/businessData"

interface dataBusiness {
    business: businessDataType[];
}

const createRows = ({
    business
}: dataBusiness) => {
    const newRows = business.map((item, idx) => ({
        id: `${item.businessDataID}-${idx}`,
        ...item,
    }));
    return newRows;
};

export default createRows;