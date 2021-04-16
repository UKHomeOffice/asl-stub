module.exports = {
  port: process.env.PORT || 8080,
  db: {
    database: process.env.DATABASE_NAME || 'asl',
    host: process.env.DATABASE_HOST || 'localhost',
    user: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT
  },
  // keep log of requests for 5min
  lifetime: process.env.LIFETIME || 300000
};
