import 'reflect-metadata';
import { DataSource } from 'typeorm';

let AppDataSource: DataSource | null = null; 

const getDataSource = async () => {
    // Se è già inizializzato, restituiscilo immediatamente
    if (AppDataSource && AppDataSource.isInitialized) {
        return AppDataSource;
    }
    // Altrimenti, crea e inizializza una nuova istanza
    const dataSource = new DataSource({
        
        type: 'mysql',
        host: 'localhost',
        port: 3307,
        username:  process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database:  process.env.DB_NAME,
        entities: [""], // Rimuovi il pattern, usa l'array
        synchronize: false,
        logging: process.env.NODE_ENV === 'development', // Utile per il debug
    });

    AppDataSource = await dataSource.initialize();
    return AppDataSource;
};

