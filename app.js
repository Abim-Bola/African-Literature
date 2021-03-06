//jshint esversion:6
// todo: check out eslint intead
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const literatureRouter = require('./src/routes/literatureRoutes');




const app = express();


//db config
const db = require('./src/config/key').MongoURI;


//connect to mongoose
 mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("mongo connected"))
.catch(err => console.log(err));


// callback => promises => async/await

//body parser
app.use(express.urlencoded({extended: false}));

app.get("/", function(req, res){
res.status(200).json({message: "Welcome to African Literature api. An api that provides data of literature in Africa."});
});

app.use("/Africa", literatureRouter);



const PORT = process.env.PORT || 3000

app.listen(PORT, console.log("server started on" + " " + PORT));

// module.exports = {
//     init: async() => {
//         await mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
//         console.log("mongo connected");
//         return app;
//     },
//     shutdown: async() => {
//         await mongoose.disconnect();
//     }
// }