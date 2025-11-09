import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { PrimaryGeneratedColumn, Column } from "typeorm";
import { FreelanceRegistry } from "./freelanceRegistry";

@Entity('signIn')
export class SignIn {

    @PrimaryGeneratedColumn('uuid')
    signInID!: string;

    @Column( { type: 'varchar', length: 255 })
    emailUser!:string;

    @Column({ type: 'varchar', length: 255 })
    passwordUser!: string;

    @Column({ type: 'varchar', length: 255 })
    freelanceRegistryID!: string;

    @ManyToOne(() => FreelanceRegistry)
    @JoinColumn({ name: 'freelanceRegistryID' })
    freelanceRegistry!: FreelanceRegistry
}