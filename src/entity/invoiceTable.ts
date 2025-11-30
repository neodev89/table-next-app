import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BusinessData } from "./businessData";

@Entity('invoiceTable')
export class InvoiceTable {
    @PrimaryGeneratedColumn('uuid')
    invoiceID!: string;

    @Column('int')
    taxable!: number;

    @Column('int')
    vat!: number;

    @Column('int')
    total!: number;

    @Column('int', { nullable: true })
    foodExpense!: number | null;

    @Column('int', { nullable: true })
    variousExpense!: number | null;

    @Column('int', { nullable: true })
    stampExpense!: number | null;

    @Column('boolean')
    print!: boolean;

    @Column('varchar')
    invoiceDirection!: string;

    @ManyToOne(() => BusinessData, {
        onDelete: "CASCADE",
    })
    @JoinColumn({ name: "businessDataID" })
    businessData!: BusinessData;
}