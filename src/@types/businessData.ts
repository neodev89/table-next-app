interface businessDataType {
    businessDataID: string;
    taxable: number;
    vat: number;
    foodExpense: number | null;
    personnellExpense: number | null;
    variousExpense: number | null;
    dailyFee: number | null;
    monthlyFee: number | null;
    monthlyPayment: number | null;
    monthlyDivisiblePayment: number | null;
    ordinaryRegime: boolean;
    forfaitRegime: boolean;
    simplifiedRegime: boolean;
}

export type { businessDataType }