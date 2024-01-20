// Create the express app object and add my middleware
const express = require('express')
const app = express()
const todoRouter = require('./routes/todoRouter')

// Middleware
app.use(express.json()) // bodyParser middleware for json APIs
app.use(express.urlencoded({ extended: true })) // bodyParser middleware for SSR (Server Side Rendering) Apps
app.use('/todos', todoRouter)

module.exports = app