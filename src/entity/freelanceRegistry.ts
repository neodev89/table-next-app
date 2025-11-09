import { Entity } from "typeorm";
import { PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('freelanceRegistry')
export class FreelanceRegistry {
    @PrimaryGeneratedColumn('uuid')
    freelanceRegistryID!: string;

    @Column()
    nameUser!: string;

    @Column()
    lastNameUser!: string;

    @Column()
    taxID!: string;

    @Column()
    vatNumber!: string;

    @Column()
    birthUser!: Date;

    @Column()
    birthCityUser!: string;

    @Column()
    countryUser!: string;

    @Column()
    emailUser!: string;

    @Column()
    passwordUser!: string;
};