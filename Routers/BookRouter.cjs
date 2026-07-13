const express = require("express");
const BookController = require("../Controllers/BookController.cjs")
const AuthMiddleware = require("../Middlewares/AuthMiddlewares.cjs")
const AuthAdmin = require("../Middlewares/AuthAdmin.cjs")
const router = express.Router();


//Api GetAllBook
router.get("/api/GetAllBook",AuthMiddleware,AuthAdmin,BookController.GetAllBook);

//Api GetBook
router.get("/api/GetBook/:id",AuthMiddleware,AuthAdmin,BookController.GetBook);

//Api createBook
router.post("/api/createBook", AuthMiddleware,AuthAdmin,BookController.createBook);

//Api Update Book By Id
router.put("/api/UpdateBook/:id",AuthMiddleware,AuthAdmin,BookController.UpdateBook);

//Api DeleteBook
router.delete("/api/DeleteBook/:id", AuthMiddleware,AuthAdmin,BookController.DeleteBook);

module.exports = router;
