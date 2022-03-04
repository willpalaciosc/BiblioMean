const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
     name: String,
     author: String,
     editorial: String,
     published: {type: date},
     genre: String
})

const Book = new mongoose.model('book', bookSchema)

module.exports = Book 
