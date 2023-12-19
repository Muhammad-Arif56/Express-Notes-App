const jwt= require('jsonwebtoken')
const bcrypt= require('bcrypt')
const SecretKey= 'funavrytechnology'
const userModel= require('../models/userModel')


//creating users
const singup= async(req,res)=>{
    const{username,email,password}= req.body
    try {
        if(!username || !email || !password){
            return res.status(400).send("please fill up all required fields")
        }
        
        const existingUser= await userModel.findOne({email:email})
        if(existingUser){
            return res.send("user already registered")
        }

        const hashedPassword= await bcrypt.hash(password,10)
        const newUser= await userModel.create({
            username:username,
            email:email,
            password:hashedPassword
        })

        const token= jwt.sign({email:newUser.email, id: newUser._id},SecretKey)
        return res.status(200).send(user= newUser, token= token)
        
    } catch (error) {
        return res.status(400).send('Error')
    }
}

module.exports= singup