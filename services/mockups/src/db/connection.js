import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/test')
var db = mongoose.connection

const connection = {
  host: 'localhost'
}

const db = pg(connection)
