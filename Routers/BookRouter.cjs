const express = require("express");
const BookController = require("../Controllers/BookController.cjs")
const AuthMiddleware = require("../Middlewares/AuthMiddlewares.cjs")
const router = express.Router();

//Api createBook
router.post("/api/createBook", AuthMiddleware,BookController.createBook);

//Api GetAllBook
router.get("/api/GetAllBook",AuthMiddleware,BookController.GetAllBook);

//Api DeleteBook
router.delete("/api/DeleteBook/:id", AuthMiddleware,BookController.DeleteBook);

module.exports = router;
