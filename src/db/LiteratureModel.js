//jshint esversion:6
const mongoose = require("mongoose");

const LiteratureSchema = new mongoose.Schema({
    
bookTitle: {
    type: String,
    required: true
},

authorName: {
    type: String,
    required: true
},

published: {
    type: string,
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



const Literature = mongoose.model('Literature', LiteratureSchema);
module.exports = Literature;
