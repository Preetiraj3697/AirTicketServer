const express = require('express');
const authRoutes = require('./Routes/auth');
const flightRoutes = require('./Routes/flight');
const bookingRoutes = require('./Routes/booking');
const {authenticate} = require('./Middleware/authenticate');
const app = express();
const {connection}=require("./Config/db")

require("dotenv").config()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Preeti Raj")
})
app.use('/api/auth', authRoutes);
app.use(authenticate);
app.use('/api/flights', flightRoutes);
app.use('/api/bookings', bookingRoutes);

app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log("Connected to the DB")
    }catch(err){
        console.log("Trouble connecting to the DB")
        console.log(err)

    }
    console.log(`server running at ${process.env.PORT}`)
})