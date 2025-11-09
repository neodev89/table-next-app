CREATE TABLE signIn (
	signInID VARCHAR(255) NOT NULL,
    emailUser VARCHAR(255) NOT NULL,
    passwordUser VARCHAR(255) NOT NULL,
	freelanceRegistryID VARCHAR(255) NOT NULL,
    FOREIGN KEY (freelanceRegistryID) REFERENCES freelanceRegistry(freelanceRegistryID)
);
    