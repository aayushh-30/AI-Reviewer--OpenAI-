const express = require('express')
require('dotenv').config()
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: '*',
    credentials: true
}))

app.get('/',(req,res) => {
    res.send('Hello World')
})

app.use('/ai', require('./routes/ai.routes.js'))

module.exports = app