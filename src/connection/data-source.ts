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
    });

    AppDataSource = await dataSource.initialize();
    return AppDataSource;
};