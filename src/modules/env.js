module.exports = {
  api: {
    host: process.env.API_HOST || 'localhost',
    port: process.env.API_PORT || 9090
  },
  broker: {
    host: process.env.BROKER_HOST || 'localhost',
    user: process.env.BROKER_USER || 'root',
    password: process.env.BROKER_PASSWORD || 'root',
  },
  db: {
    nosql: {
      host: process.env.DB_NOSQL_HOST || 'localhost',
      name: process.env.DB_NOSQL_NAME || 'tst_event_sourcing',
      port: process.env.DB_NOSQL_PORT || 27017,
      password: process.env.DB_NOSQL_PASSWORD || 'root',
      user: process.env.DB_NOSQL_USER || 'root',
    },
    sql: {
      host: process.env.DB_SQL_HOST || 'localhost',
      name: process.env.DB_SQL_NAME || 'tst_event_sourcing',
      port: process.env.DB_SQL_PORT || 3306,
      password: process.env.DB_SQL_PASSWORD || 'root',
      user: process.env.DB_SQL_USER || 'root',
    },
  }
}