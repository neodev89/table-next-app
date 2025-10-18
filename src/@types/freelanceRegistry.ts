type FreelanceRegistry = {
    freelanceRegistryID: string;
    nameUser: string;
    lastNameUser: string;
    taxID: string;
    vatNumber: string;
    birthUser: Date;
    birthCityUser: string;
    countryUser: string;
    emailUser: string;
    passwordUser: string;
};

type BusinessData = {
    businessDataID: string;
    taxable: number;
    vat: number;
    total: number;
    foodExpense: number;
    personnellExpense: number;
    variousExpense: number;
    dailyFee: number;
    monthlyFee: number;
    monthlyPayment: number;
    monthlyDivisiblePayment: number;
    ordinaryRegime: boolean;
    forfaitRegime: boolean;
    simplifiedRegime: boolean;
};

type FreelanceTable = {
    freelanceID: string;
    businessYearStart: Date;
    businessYearEnd: Date;
    companyStart: Date;
    companyEnd: Date;
};

type InvoiceTable = {
    invoiceID: string;
    taxable: number;
    vat: number;
    total: number;
    foodExpense: number;
    variousExpense: number;
    stampExpense: boolean;
    print: boolean;
    invoiceDirection: string;
};

export type {
    FreelanceTable,
    FreelanceRegistry,
    BusinessData,
    InvoiceTable
}