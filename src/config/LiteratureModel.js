//jshint esversion:6
const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    
bookTitle: {
    type: String,
    required: true
},

authorName: {
    type: String,
    required: true
},

published: {
    type: String,
    required: true
},

isbn: {
    type: String,
    required: true
},

genre: {
    type: String,
    required: true
},

pages: {
    type: String,
    required: true
},

country: {
    type: String,
    required: true
}

}); 



const Book = mongoose.model('Book', BookSchema);
module.exports = Book;
