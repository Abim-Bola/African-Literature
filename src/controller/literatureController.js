//jshint esversion:6
const express = require("express");
const Book = require("../config/LiteratureModel");



const africanLiterature = {


    getLiterature(req, res) {
        
        Book.find({}, function(err, foundBooks){
      if(err){
          res.status(500).send("Theres an error");
      }else{
          if(foundBooks){
              res.send(foundBooks);
          }
      }
        });

    },
    getOneLiterature(req, res) {
        
        Book.findOne({bookTitle: req.params.bookTitle}, function(err, foundBooks){
      if(err){
          res.status(500).send("Theres an error");
      }else{
          if(foundBooks){
              res.send(foundBooks);
          }
      }
        });

    },
    postLiterature(req, res) {
        const { bookTitle, authorName, genre, published, pages, country, isbn } = req.body;

        const newBook = new Book({
        bookTitle,
           authorName,
           genre,
           published,
           pages,
           country,
           isbn 
        });

        newBook.save(function (err) {
            if (err) {
                res.status(500).send("Theres an error");
            } else {
                res.status(200).send(req.body);
            }
        });

    },

   deleteLiterature(req, res){
      Book.deleteOne({isbn: req.params.isbn}, function(err){
       if(err){
           res.status(500).send("there is an error");
       }else{
        res.status(200).send("Deleted successfully");
       }
      });
   },

   updateLiterature(req, res){
    Book.updateOne(
        {isbn: req.params.isbn},
        {$set: req.body}, function(err, updatedBook){
            if(err){
                res.status(500).send("There is an error");
            }else{
                res.status(200).send("Updated Successfully");
            }
        }
    );
   }

};

module.exports = africanLiterature;