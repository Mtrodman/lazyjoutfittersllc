// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')


// SEQUELIZE CONNECTION
const sequelize = new Sequelize({
    storage: process.env.PG_URI,
    dialect: 'postgres',
    username: 'postgres',
    password: 'Rod4man08291012'
  })

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Lazy J Hunting'
    })
})

// CONTROLLERS 
// const userloginController = require('./controllers/userlogin_controller')
// app.use('/userlogin', userloginController)

// const reviewsController = require('./controllers/reviews_controller')
// app.use('/reviews', reviewsController)



// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Server on port : ${process.env.PORT}`)
})

