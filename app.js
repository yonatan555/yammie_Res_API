const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

const app = express();
app.use(express.json())

//load config
dotenv.config({path: './config/config.env'})
connectDB();

//Routes
app.use('/',require('./routes/index'))

//listen port 
const port = process.env.PORT
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})