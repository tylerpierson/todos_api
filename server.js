require('dotenv').config()
const app = require('./app')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const PORT = process.env.PORT || 3000

// Set up the view engine
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => console.log('Mongo is CONNECTED'))

app.listen(PORT, () => {
    console.log(`Port is ACTIVE @ PORT ${PORT}`)
})