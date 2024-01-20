const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todoController')

// Index
    // Postman - SUCCESS
router.get('/', todoController.index) // Run index fourth

// Create
    // Postman - SUCCESS
router.post('/', todoController.create) // Have to run create first in the test in order to do anything else

// Update
    // Postman - SUCCESS
router.put('/:id', todoController.update) // Third run update

// Destroy
    // Postman - SUCCESS
router.delete('/:id', todoController.destroy) // Run delete last

// Show
    // Postman - SUCCESS
router.get('/:id', todoController.show) // Run show second

module.exports = router