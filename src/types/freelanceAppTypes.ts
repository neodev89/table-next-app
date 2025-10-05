type FreelanceTableProps = {
    freelanceID: string;
    businessYearStart: Date;
    businessYearEnd: Date;
    companyStart: Date;
    companyEnd: Date;
};

type FreelanceRegistryProps = {
    freelanceRegistryID: string;
    nameUser: string;
    lastNameUser: string;
    taxID: number;
    vatNumber: string;
    birthDate: Date;
    birthCityUser: string;
    countryUser: string;
    emailUser: string;
    passwordUser: string;
    foreignIDFreelanceTable?: number;
};

type businessData = {
    businessDataID: string;
    taxable: number;
    vat: number;
    total: number;
    foodExpense: number;
    personnellExpense: number;
    dailyFee: number;
    monthlyFee: number;
    monthlyPayment: number;
    monthlyDivisiblePayment: number;
    ordinaryRegime: boolean;
    forfaitRegime: boolean;
    simplifiedRegime: boolean;
    foreignKeyBusinessData?: number; 
};

type invoiceTableProps = {
    invoiceID: string;
    taxable: number;
    vat: number;
    totale: number;
    foodExpense: number;
    variousExpense: number;
    stampExpense: number;
    print: boolean;
    invoiceDirection: string;
    foreignKeyInvoiceID?: number;
};

export type {
    FreelanceTableProps,
    FreelanceRegistryProps,
    businessData,
    invoiceTableProps,
}
