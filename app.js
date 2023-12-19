const express= require('express')
const bodyParser= require('body-parser')
const userRouter = require('./routes/userRouter')
require('./config/conn')

const app= express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/user',userRouter)



const port= process.env.port||5067
app.listen(port,()=>{
    console.log("server is listening at port : ", port);
})
