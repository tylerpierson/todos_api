// the packages and variables needed for setup
const request = require('supertest') // this is the thing that lets us run our code like postman
const { MongoMemoryServer } =  require('mongodb-memory-server')// this creates the fake mongodb databse that exists on our computer in our memory not on atlas
const app = require('../app') // this is our api application that we made with express this is the thing that we are giving to supertest to test
const Todo = require('../models/Todo') // this is for us to be able to do crud operation on the User
const mongoose = require('mongoose')
const server = app.listen(8080, () => console.log('Testing on Port 8080'))
let mongoServer 

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create()
    mongoose.connect(mongoServer.getUri(), {
        useNewUrlParser: true, useUnifiedTopology: true
    })
})

afterAll(async () => {
    await mongoose.connection.close()
    mongoServer.stop()
    server.close()
})

describe('Test suite for the /todos routes on our api', () => {
    // CREATE test/todos
    test('It should create a new todo in the db', async () => {
        const response = await request(app).post('/todos').send({ title: 'Test Todo', description: 'Testing the Todo API', completed: 'on' })

        expect(response.statusCode).toBe(200)
        expect(response.body.title).toEqual('Test Todo')
        expect(response.body.description).toEqual('Testing the Todo API')
        expect(response.body.completed).toEqual(true)
    })

    // INDEX test/todos
    test('It should get all todos from the db', async () => {
        const response = await request(app).get('/todos')

        expect(response.statusCode).toBe(200)
    })

    // CREATE test/todos
    test('It should create a new todo in the db', async () => {
        const response = await request(app).post('/todos').send({ title: 'Test Todo', description: 'Testing the Todo API', completed: 'on' })

        expect(response.statusCode).toBe(200)
        expect(response.body.title).toEqual('Test Todo')
        expect(response.body.description).toEqual('Testing the Todo API')
        expect(response.body.completed).toEqual(true)
    })
  })