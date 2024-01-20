const Todo = require('../models/todo')

/*
Status Codes
    200 - Good response
        200 - Okay
        201 - Created
        204 - No Content
    300 - Redirection
        301 - Redirect
        302 - Redirect
    400 - Bad response; User's fault
        400 - Bad response
        401 - Unauthorized 
        403 - Forbidden
        404 - Not found
    500 - Bad response; Server's fault
*/

// Index
exports.index = async function index (req, res) {
    // Grab all of the todos
    try {
        const todos = await Todo.find({})
        res.status(200).json(todos)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Create
exports.create = async function create (req, res) {
    // Make a new todo
    try {
        const todo = await todo.create(req.body)
        res.status(200).json(todo)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Update
exports.update = async function update (req, res) {
    // Update a todo that was already made
    try {
        const updatedTodo = await Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true } )
        res.status(200).json(updatedTodo)
    } catch (error) {
        res.status(400).json({ message: error.message }) 
    }
}

// Destroy
exports.destroy = async function destroy (req, res) {
    // Delete an existing todo
    try {
        const deletedTodo = await Todo.findOneAndDelete({ _id: req.params.id })

        res.status(200).json({ msg: `The todo with the ID of ${deletedTodo._id} was deleted from the MongoDB database. No further action necessary.`})
    } catch (error) {
        res.status(400).json({ message: error.message }) 
    }
}

// Show
exports.show = async function show (req, res) {
    // Show 1 individual todo
    try {
        
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
