import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

/**
 * Main datasource
 */
const AppDataSource = new DataSource({
    type: <any>process.env.DB_CONNECTION || 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USERNAME || 'aiudo',
    password: process.env.DB_PASSWORD || 'aiudo',
    database: process.env.DB_DATABASE || 'aiudo',
    entities: [ 'models/**/*{.js,.ts}' ],
    synchronize: false,
    dropSchema: false,
    migrations: ['database/migrations/**/*{.js,.ts}'],
    migrationsRun: false,
    //namingStrategy as SnakeNamingStrategy required for MySQL database type
    namingStrategy: new SnakeNamingStrategy(),
    //Name for this data source
    name: 'mysql',
    migrationsTableName: 'node_migrations'
});

export default AppDataSource;


// "typeorm" is a dependency which allows us to connect to the database
// this file establishes the connection to the database