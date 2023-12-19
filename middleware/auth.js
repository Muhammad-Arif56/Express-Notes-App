const jwt= require('jsonwebtoken')
const SecretKey= 'funavrytechnology'
const userModel= require('../models/userModel')
const auth= async(req, res, next)=>{
    try {
        const token= req.headers.authorization
    if (token) {
        token= token.split(" ")[1]
        const user= jwt.verify(token, SecretKey)
        user.id= req.userid
        
    } else {
        return res.status(401).json({message: "UnAuthorized User"})
    }
    next()
    } catch (error) {
        return res.status(404).send("Something went wrong")
    }
}


module.exports= auth
