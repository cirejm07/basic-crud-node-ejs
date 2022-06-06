const express = require('express');
const booksController = require('../controllers/booksController')
const router = express.Router();



// Home Page / Get all
router.get("/", booksController.books_index)


// Find book
router.get("/books/:id", booksController.books_find)

// Delete book
router.delete('/books/:id', booksController.books_delete)

// Add book
router.post('/books', booksController.books_add)

router.get("/add", booksController.books_addPageDetails)

// update user
router.get("/update/:id", booksController.books_update)

router.post('/update/:id', booksController.books_toUpdate)

module.exports = router;