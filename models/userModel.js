const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true,"Please enter username"],
    unique: true,
  },
  email: {
    type: String,
    requiered: [true,"Please enter email"],
    unique: true,
  },
  password:{
    type: String,
    required: [true,"Please enter password"]

  },
 
},  {timestamp:true} );


module.exports= mongoose.model('User', userSchema)
