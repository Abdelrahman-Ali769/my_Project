const express =require('express')
const BookController =require('../Controllers/BookController.cjs')
const router =express.Router()

// Read All Books
router.get('/api/Books',BookController.ReadBooks)

// Create Book
router.post('/api/Books',BookController.CreateBook)

// Delete book
router.delete('/api/Books/:id',BookController.DeleteBook)
module.exports =router