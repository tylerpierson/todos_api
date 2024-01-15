const express = require('express')
const morgan = require('morgan')
const todoRoutes = require('./routes/todoRoutes')
const app = express()

app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('combined'))
app.use('/todos', todoRoutes)

module.exports = app