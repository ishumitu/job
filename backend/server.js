const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errormiddleware')
const connectDB = require('./config/db')
const port =  process.env.PORT || 5000

connectDB()
    .then((conn) => {
console.log(`MongoDB connected: ${conn.connection.host + "/" + conn.connection.name}`.cyan.underline)
          } )


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/api/jobs', require('./routes/jobRoutes'))    
app.use('/api/users', require('./routes/userRoutes')) 


app.use(errorHandler) 

app.listen(port, () => console.log(`Server started on port ${port}`))


 