const express = require('express')
const connectDb   = require('./config/db')
const app  =express();
const env  =require('dotenv');
const cors = require('cors');
const userrouter = require('./routes/authrouter');
const router = require('./routes/userrouter');
env.config()
connectDb();
app.use(cors());
app.use(express.json())
app.use('/',userrouter)
app.use('/',router)



const PORT  = process.env.PORT ||3456
app.listen(PORT,()=>console.log(`server is running at ${PORT}`))
