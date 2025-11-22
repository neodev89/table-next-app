import 'reflect-metadata';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('revoked_tokens')
export class RevokedTokens {
    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column('varchar', { length: 512 })
    token!: string;

    @Column('varchar', { length: 255 })
    user_id!: string;

    @Column('timestamp', {  default: () => 'CURRENT_TIMESTAMP' })
    revoked_at!: Date;

    @Column('timestamp')
    expires_at!: Date;
   
};
