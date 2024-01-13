const User = require('../models/Todo')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Index
exports.indexTodo = async (req, res) => {
    try {
        const foundTodos = await Todo.find({})
        res.render('todos/Index', {
            todos: foundTodos
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

// Destroy
exports.deleteTodo = async (req, res) => {
    try {
        await Todo.findOneAndDelete({ '_id': req.params.id })
            .then(() => {
                res.redirect('/todos')
            })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

// Update
exports.updateTodo = async (req, res) => {
    if(req.body.completed === 'on'){
        req.body.completed = true
    }else{
        req.body.completed = false
    }
    try {
        await Todo.findOneAndUpdate({ '_id': req.params.id }, 
            req.body, { new: true })
            .then(() => {
                res.redirect(`/todos/${req.params.id}`)
            })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

// Create
exports.createTodo = async (req, res) => {
    if(req.body.completed === 'on'){
        req.body.completed = true
    }else{
        req.body.completed = false
    }
    try{
        const createdTodo = await Todo.create(req.body)
        // res.send('received')
        res.redirect(`/todos/${createdTodo._id}`)
    }catch(error){
        res.status(400).send({message: error.message})
    }
}

// Show
exports.getTodo = async (req, res) => {
    try {
        const foundTodo = await Todo.findOne({ _id: req.params.id })
        res.render('todos/Show', {
            todo: foundTodo
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}