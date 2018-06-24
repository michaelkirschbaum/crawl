const pg = require('pg-promise')

const connection = {
  host: 'localhost',
  port: 5433,
  database: 'users-dev',
  user: 'admin',
  password: 'admin'
}

const db = pg(connection)

module.exports = db
