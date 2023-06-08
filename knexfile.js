require('dotenv').config();

module.exports = {
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,
    migrations: {
        tableName: 'knex_migrations',
        directory: './src/config/database/migrations'
    },
    seeds: {
        directory: './src/config/database/seeds'
    }
}