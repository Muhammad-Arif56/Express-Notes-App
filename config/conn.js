const mongoose= require('mongoose')
const MyConnection= mongoose.connect('mongodb://127.0.0.1:27017/notes').then(()=>{
    console.log("database connected successfully");
}).catch(()=>{
    console.log("Connection failed");
})

module.exports= MyConnection;