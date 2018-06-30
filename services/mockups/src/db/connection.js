import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/test')

const connection = {
  host: 'localhost'
}

const db = pg(connection)
