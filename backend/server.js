const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const journalRoutes = require('./routes/items')
const cors = require('cors');
require('dotenv').config({path: './config/.env'})

connectDB()


app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/journal', journalRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log(`Server running! Port ${process.env.PORT}`)
})    

