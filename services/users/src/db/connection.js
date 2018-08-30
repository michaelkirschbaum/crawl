const pg = require('pg-promise')()

const connection = {
  host: 'users-db',
  port: 5432,
  database: 'users_dev',
  user: 'admin',
  password: 'admin'
}

const db = pg(connection)

module.exports = db
