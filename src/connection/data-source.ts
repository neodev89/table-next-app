import 'reflect-metadata';
import { DataSource, EntitySchema } from 'typeorm';

let AppDataSource: DataSource | undefined = undefined;

export const getInitializedAppData = async (entities: (string | Function | EntitySchema<any>)[]) => {
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
        entities: entities
    });

    AppDataSource = await dataSource.initialize();
    return AppDataSource;
};