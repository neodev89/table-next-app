create table freelanceTable (
	freelanceID varchar(255) primary key,
	businessYearStart date not null,
	businessYearEnd date not null,
	companyStart date not null,
	companyEnd date not null,
    freelanceRegistryID VARCHAR(255) NOT NULL,
	foreign key (freelanceRegistryID) references freelanceRegistry(freelanceRegistryID)
);