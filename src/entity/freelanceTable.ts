import 'reflect-metadata';
import type { FreelanceTable } from '@/@types/freelanceRegistry';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class FreelanceTableEntity {
    @PrimaryGeneratedColumn('uuid')
    freelanceID: string;
    @Column()
    businessYearStart: Date;
    @Column()
    businessYearEnd: Date;
    @Column()
    companyStart: Date;
    @Column()
    companyEnd: Date;

    constructor({
        freelanceID,
        businessYearStart,
        businessYearEnd,
        companyStart,
        companyEnd,
    }: FreelanceTable) {
        this.freelanceID = freelanceID;
        this.businessYearStart = businessYearStart;
        this.businessYearEnd = businessYearEnd;
        this.companyStart = companyStart;
        this.companyEnd = companyEnd;
    };
};