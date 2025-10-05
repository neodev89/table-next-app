create table businessData (
	businessDataID varchar(255) primary key,
    taxable int not null,
    vat int not null,
    total int not null,
    foodExpense int,
    personnellExpense int,
    variousExpense int,
    dailyFee int,
    monthlyFee int,
    monthlyPayment int,
    monthlyDivisiblePayment int,
    ordinaryRegime boolean not null,
    forfaitRegime boolean not null,
    simplifiedRegime boolean not null,
    foreign key (businessDataID) references FreelanceRegistry(freelanceRegistryID)
);