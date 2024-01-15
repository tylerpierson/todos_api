const Todo = require('../models/Todo')

// Index
exports.indexTodo = async (req, res) => {
    try {
        const foundTodos = await Todo.find({})
        
        res.render('todos/Index', {
            todos: foundTodos
        })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// New
exports.newTodo = (req, res) => {
    res.render('todos/New')
}

// Destroy
exports.deleteTodo = async (req, res) => {
    try {
        await Todo.findOneAndDelete({ '_id': req.params.id })
        res.status(200).json({ message: 'Todo deleted successfully' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Update
exports.updateTodo = async (req, res) => {
    if (req.body.completed === 'on') {
        req.body.completed = true
    } else {
        req.body.completed = false
    }

    try {
        const updatedTodo = await Todo.findOneAndUpdate({ '_id': req.params.id }, req.body, { new: true })
        res.status(200).json(updatedTodo)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Create
exports.createTodo = async (req, res) => {
    if (req.body.completed === 'on') {
        req.body.completed = true
    } else {
        req.body.completed = false
    }

    try {
        const todo = await Todo.create(req.body)
        res.status(200).json(todo)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Show
exports.getTodo = async (req, res) => {
    try {
        const foundTodo = await Todo.findOne({ _id: req.params.id })
        res.status(200).json(foundTodo)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
