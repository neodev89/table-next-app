import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { FreelanceRegistry } from "./freelanceRegistry";

@Entity('businessdata')
export class BusinessData {
    @PrimaryGeneratedColumn('uuid')
    businessDataID!: string;

    @Column('int')
    taxable!: number;

    @Column('int')
    vat!: number;

    @Column('int', { nullable: true })
    foodExpense!: number | null;

    @Column('int', { nullable: true })
    personnellExpense!: number | null;

    @Column('int', { nullable: true })
    variousExpense!: number | null;

    @Column('int')
    dailyFee!: number;

    @Column('int', { nullable: true })
    monthlyFee!: number | null;

    @Column('int', { nullable: true })
    monthlyPayment!: number | null;

    @Column('int', { nullable: true })
    monthlyDivisiblePayment!: number | null;

    @Column('boolean')
    ordinaryRegime!: boolean;

    @Column('boolean')
    forfaitRegime!: boolean;

    @Column('boolean')
    simplifiedRegime!: boolean;

    // Relazione: molti BusinessData appartengono a un FreelanceRegistry
    @ManyToOne(() => FreelanceRegistry, {
        onDelete: "CASCADE", // opzionale: elimina i dati se il registry viene eliminato
    })
    @JoinColumn({
        name: "freelanceRegistryID"
    })
    registry!: FreelanceRegistry;
};
