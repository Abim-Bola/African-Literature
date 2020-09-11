//jshint esversion:6
require('dotenv').db();
const express = require("express");
const mongoose = require("mongoose");
const app = express();


//db config
const db = require("./db/config").MongoURI;


//connect to mongoose
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("mongo connected"))
.catch(err => console.log(err));


//body parser
app.use(express.urlencoded({extended: false}));

app.get("/api", function(req, res){
res.status(200).json({message: "Welcome to my first api"});
});










const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log("server started on" + " " + PORT));