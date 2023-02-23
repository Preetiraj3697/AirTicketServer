const express = require('express');
const app = express();
require("dotenv").config()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Preeti Raj")
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})