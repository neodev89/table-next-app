create table FreelanceRegistry (
	freelanceRegistryID varchar(255) primary key,
	nameUser varchar(20) not null,
    lastNameUser varchar(20) not null,
    taxID varchar(50) not null,
    vatNumber varchar(20) not null,
    birthUser date not null,
    birthCityUser varchar(100) not null,
    countryUser varchar(100) not null,
    emailUser varchar(100) not null,
    passwordUser varchar(20) not null,
    foreign key (freelanceRegistryID) references FreelanceTable(freelanceID)
);