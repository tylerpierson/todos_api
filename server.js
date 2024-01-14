require('dotenv').config()
const app = require('./app')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => console.log('Mongo is CONNECTED'))

app.listen(PORT, () => {
    console.log(`Port is ACTIVE @ PORT ${PORT}`)
})