create table invoiceTable (
        invoiceID VARCHAR(255) PRIMARY KEY,
        taxable INT NOT NULL,
        vat INT NOT NULL,
        total INT NOT NULL,
        foodExpense INT,
        variousExpense INT,
        stampExpense INT,
        print BOOLEAN,
        invoiceDirection VARCHAR(15) NOT NULL,
        businessDataID VARCHAR(255),
        FOREIGN KEY (businessDataID) REFERENCES businessData(businessDataID)
    );