module.exports = {
  type: 'postgres',
  host: process.env.NODE_ENV ? process.env.DATABASE_HOST : 'localhost',
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  ssl:
  process.env.NODE_ENV === 'production'
    ? { rejectUnauthorized: false }
    : false,
};