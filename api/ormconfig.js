const databaseConfig = require('./src/config/database.config')

module.exports = {
  type: 'postgres',
  host: databaseConfig.default().host,
  port: 5432,
  username: databaseConfig.default().user,
  password: databaseConfig.default().password,
  database: databaseConfig.default().name,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};