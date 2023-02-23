const jwt = require("jsonwebtoken")
require("dotenv").config();

const authenticate=(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
        const decoded=jwt.verify(token,'process.env.JWT_SECRET')
        if(decoded){
            const userID=decoded.userID
            console.log(decoded)
            req.body.userID=userID
            next()
        } else {
            res.send("Please Login First")
        }
    } else {
        res.send("Please Login First")
    }
}

module.exports={
    authenticate
}