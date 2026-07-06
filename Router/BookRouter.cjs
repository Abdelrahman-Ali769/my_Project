const express = require('express');
const BookController = require('../Controllers/BookController.cjs');
const authMiddleware = require('../middlewares/authMiddleware.cjs');

const router = express.Router();

router.get('/api/Books', authMiddleware, BookController.ReadBooks);

router.post('/api/Books', authMiddleware, BookController.CreateBook);

router.delete('/api/Books/:id', authMiddleware, BookController.DeleteBook);

module.exports = router;