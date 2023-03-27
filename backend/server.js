// Modules and Globals
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const jwt = require('jsonwebtoken');
const defineCurrentUser = require('./middleware/defineCurrentUser')
const{sequelize}= require('./models')

// Express Settings
app.use(cors())
require('dotenv').config()
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(defineCurrentUser)
app.use(express.json());// parses req.body

// Controllers & Routes
app.use('/users', require('./controllers/users'))
app.use('/authentication', require('./controllers/authentication'))

// Listen for Connections
// app.listen(process.env.PORT, () => {
//     console.log(`Listening on ${process.env.PORT}`)
// })

app.listen(process.env.PORT, async () => {
    console.log(`server has started on port ${process.env.PORT}`);
    await sequelize.authenticate()
    console.log('Database connected!')
});




