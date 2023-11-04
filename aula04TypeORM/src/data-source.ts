import { DataSource } from "typeorm";

const PgDataSource = new DataSource({
    database: 'bdaula',
    type: "postgres",
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',

    synchronize: false,
    logging: true,
    entities: ["src/entities/*.ts"], //entidades que serão convertidas em tabelas
    migrations: ["src/migrations/*.ts"]//local onde estarão os aqruivos de migração
});

PgDataSource.initialize()
    .then(() => {
        console.log("Data Source inicializado!")
    })
    .catch((e) => {
        console.error("Erro na inicialização do Data Source:", e)
    });

export default PgDataSource;    