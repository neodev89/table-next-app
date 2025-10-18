import 'reflect-metadata';
import type { BusinessData } from '@/@types/freelanceRegistry';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BusinessDataEntity {
    @PrimaryGeneratedColumn('uuid')
    businessDataID: string;
    @Column()
    taxable: number;
    @Column()
    vat: number;
    @Column()
    total: number;
    @Column()
    foodExpense: number;
    @Column()
    personnellExpense: number;
    @Column()
    variousExpense: number;
    @Column()
    dailyFee: number;
    @Column()
    monthlyFee: number;
    @Column()
    monthlyPayment: number;
    @Column()
    monthlyDivisiblePayment: number;
    @Column()
    ordinaryRegime: boolean;
    @Column()
    forfaitRegime: boolean;
    @Column()
    simplifiedRegime: boolean;

    constructor({
        businessDataID,
        taxable,
        vat,
        total,
        foodExpense,
        personnellExpense,
        variousExpense,
        dailyFee,
        monthlyFee,
        monthlyPayment,
        monthlyDivisiblePayment,
        ordinaryRegime,
        forfaitRegime,
        simplifiedRegime,
    }: BusinessData) {
        this.businessDataID = businessDataID;
        this.taxable = taxable;
        this.vat = vat;
        this.total = total;
        this.foodExpense = foodExpense;
        this.personnellExpense = personnellExpense;
        this.variousExpense = variousExpense;
        this.dailyFee = dailyFee;
        this.monthlyFee = monthlyFee;
        this.monthlyPayment = monthlyPayment;
        this.monthlyDivisiblePayment = monthlyDivisiblePayment;
        this.ordinaryRegime = ordinaryRegime;
        this.forfaitRegime = forfaitRegime;
        this.simplifiedRegime = simplifiedRegime;
    };
};