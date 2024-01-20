const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todoController')

// Index
router.get('/', todoController.indexTodo)

// Create
router.post('/', todoController.createTodo)

// Update
router.put('/:id', todoController.updateTodo)

// Destroy
router.delete('/:id', todoController.deleteTodo)

// Show
router.get('/:id', todoController.getTodo)

module.exports = router