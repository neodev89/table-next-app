create table businessData (
	businessDataID VARCHAR(255) PRIMARY KEY,
	taxable INT NOT NULL,
	vat INT NOT NULL,
	total INT NOT NULL,
	foodExpense INT,
	personnellExpense INT,
	variousExpense INT,
	dailyFee INT NOT NULL,
	monthlyFee INT,
	monthlyPayment INT,
	monthlyDivisiblePayment INT,
	ordinaryRegime BOOLEAN NOT NULL,
	forfaitRegime BOOLEAN NOT NULL,
	simplifiedRegime BOOLEAN NOT NULL,
	freelanceRegistryID VARCHAR(255),
	FOREIGN KEY (freelanceRegistryID) REFERENCES freelanceRegistry(freelanceRegistryID)
);