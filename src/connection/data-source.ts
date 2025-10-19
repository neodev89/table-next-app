import { BusinessDataEntity } from '@/entity/businessData';
import { FreelanceRegistryEntity } from '@/entity/freelanceRegistry';
import { FreelanceTableEntity } from '@/entity/freelanceTable';
import { InvoiceTableEntity } from '@/entity/invoiceTable';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

let AppDataSource: DataSource | undefined = undefined;

export const getInitializedAppData = async () => {
    if (AppDataSource && AppDataSource.isInitialized) {
        return AppDataSource;
    }
    const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: 3307,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [FreelanceTableEntity, FreelanceRegistryEntity, BusinessDataEntity, InvoiceTableEntity]
    });

    AppDataSource = await dataSource.initialize();
    return AppDataSource;
};