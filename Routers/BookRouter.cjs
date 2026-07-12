const express = require("express");
const BookController = require("../Controllers/BookController.cjs")
const AuthMiddleware = require("../Middlewares/AuthMiddlewares.cjs")
const AuthAdmin = require("../Middlewares/AuthAdmin.cjs")
const router = express.Router();

//Api createBook
router.post("/api/createBook", AuthMiddleware,AuthAdmin,BookController.createBook);

//Api GetAllBook
router.get("/api/GetAllBook",AuthMiddleware,AuthAdmin,BookController.GetAllBook);

//Api DeleteBook
router.delete("/api/DeleteBook/:id", AuthMiddleware,AuthAdmin,BookController.DeleteBook);

module.exports = router;
