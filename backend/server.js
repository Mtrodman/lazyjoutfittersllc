// DEPENDENCIES
const { dblClick } = require('@testing-library/user-event/dist/click')
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const cors = require("cors");


// SEQUELIZE CONNECTION
const sequelize = new Sequelize({
    storage: process.env.PG_URI,
    dialect: 'postgres',
    host: "localhost",
    username: 'postgres',
    password: 'Rod4man08291012',
    port: 5432,
    // database: "Lazy_J_Outfitters",
    database: "LazyJ",
  })

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Lazy J Hunting'
    })
})



app.post("/Login", async (req, res) => {
    try {
        const user_name = req.body.user_name
        const user_password = req.body.user_password
        const newLogin = await sequelize.query(
        "INSERT INTO userlogins ( user_name, user_password) VALUES ($1, $2) RETURNING *",[
        console.log(req.body.user_name, req.body.user_password)
        ]);
    res.json(newLogin[0][0]);
} catch (err) {
    console.error(err.message);
}
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

