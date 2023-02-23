let express = require('express')
let DashboardRouter = express.Router()
let Booking = require('../Model/Booking')



DashboardRouter.get('/',async(req,res)=>{
    try {
    
        let data = await Booking.find();
        res.status(200).json(data)
      
    } catch (err) {
      console.log("err :>> ", err);
      res.send({ err: err });
    }
})

module.exports = DashboardRouter