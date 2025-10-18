import 'reflect-metadata';
import type { InvoiceTable } from '@/@types/freelanceRegistry';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

Entity()
export class InvoiceTableEntity {
    @PrimaryGeneratedColumn('uuid')
    invoiceID: string;
    @Column()
    taxable: number;
    @Column()
    vat: number;
    @Column()
    total: number;
    @Column()
    foodExpense: number;
    @Column()
    variousExpense: number;
    @Column()
    stampExpense: boolean;
    @Column()
    print: boolean;
    @Column()
    invoiceDirection: string;

    constructor({
        invoiceID,
        taxable,
        vat,
        total,
        foodExpense,
        variousExpense,
        stampExpense,
        print,
        invoiceDirection,
    }: InvoiceTable) {
        this.invoiceID = invoiceID;
        this.taxable = taxable;
        this.vat = vat;
        this.total = total;
        this.foodExpense = foodExpense;
        this.variousExpense = variousExpense;
        this.stampExpense = stampExpense;
        this.print = print;
        this.invoiceDirection = invoiceDirection;
    };
};