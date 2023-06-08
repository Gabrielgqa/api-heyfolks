require('dotenv').config();

module.exports = {
    client: 'pg',
    connection: {
        host : process.env.DB_HOST,
        port : process.env.PORT,
        user : process.env.DB_USERNAME,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_NAME
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: './src/config/database/migrations'
    },
    seeds: {
        directory: './src/config/database/seeds'
    }
}