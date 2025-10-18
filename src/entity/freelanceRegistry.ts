import 'reflect-metadata';
import type { FreelanceRegistry } from '@/@types/freelanceRegistry';
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FreelanceRegistryEntity {
    @PrimaryGeneratedColumn('uuid')
    freelanceRegistryID: string;
    @Column()
    nameUser: string;
    @Column()
    lastNameUser: string;
    @Column()
    taxID: string;
    @Column()
    vatNumber: string;
    @Column()
    birthUser: Date;
    @Column()
    birthCityUser: string;
    @Column()
    countryUser: string;
    @Column()
    emailUser: string;
    @Column()
    passwordUser: string;

    constructor({
        freelanceRegistryID,
        nameUser,
        lastNameUser,
        taxID,
        vatNumber,
        birthUser,
        birthCityUser,
        countryUser,
        emailUser,
        passwordUser,
    }: FreelanceRegistry) {
        this.freelanceRegistryID = freelanceRegistryID;
        this.nameUser = nameUser;
        this.lastNameUser = lastNameUser;
        this.taxID = taxID;
        this.vatNumber = vatNumber;
        this.birthUser = birthUser;
        this.birthCityUser = birthCityUser;
        this.countryUser = countryUser;
        this.emailUser = emailUser;
        this.passwordUser = passwordUser;
    };
};