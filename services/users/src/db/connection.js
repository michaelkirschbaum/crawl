const pg = require('pg-promise')

const connection = {
  host: 'localhost'
}

const db = pg(connection)
