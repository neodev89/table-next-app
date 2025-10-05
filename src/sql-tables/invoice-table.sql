create table invoiceTable (
	invoiceID varchar(255) primary key,
    taxable int not null,
    vat int not null,
    total int not null,
    foodExpense int,
	variousExpense int,
    stampExpense int,
    print boolean,
    invoiceDirection varchar(15) not null,
    foreign key (invoiceID) references businessData(businessDataID)
);