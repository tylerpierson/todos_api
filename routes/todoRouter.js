const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todoController')

// Index
router.get('/', todoController.index)

// Create
router.post('/', todoController.create)

// Update
router.put('/:id', todoController.update)

// Destroy
router.delete('/:id', todoController.destroy)

// Show
router.get('/:id', todoController.show)

module.exports = router