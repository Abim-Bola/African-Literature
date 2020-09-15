//jshint esversion:6
const express = require("express");
const africanLiterature = require("../controller/literatureController.js");
const literatureRouter = express.Router();


literatureRouter.get("/Literature", africanLiterature.getLiterature);
literatureRouter.get("/Literature/:bookTitle", africanLiterature.getOneLiterature);
literatureRouter.post("/add-Literature", africanLiterature.postLiterature);
literatureRouter.delete("/Literature/:isbn", africanLiterature.deleteLiterature);
literatureRouter.patch("/Literature/:isbn", africanLiterature.updateLiterature);


module.exports = literatureRouter;