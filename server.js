// DEPENDENCIES  where we require all our packages
const express = require('express')
const { Sequelize } = require('sequelize')
const app = express()

// CONFIGURATION / MIDDLEWARE where we configure those dependency packages
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// SEQUELIZE CONNECTION does not create db for you - removed when init:models was added after init:config
// const sequelize = new Sequelize(process.env.PG_URI, {
//     username: "postgres",
//     dialect: "postgres",
//     password: process.env.PG_Password,
// })

// try {
//     sequelize.authenticate()
//     console.log(`Connected with Sequelize at ${process.env.PG_URI}`)
// } catch (err) {
//     console.log(`Unable to connect to PG: ${err}`)
// }

// ROOT a GET for the root route ('/') responding with a welcome message
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// CONTROLLERS 
const bandsController = require('./controllers/bands_controller')
app.use('/bands', bandsController)

// LISTEN where we tell our app what port to listen for connections on
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})