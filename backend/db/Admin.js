const mongoose = require('mongoose');

const adminSchema=new mongoose.Schema({
    dept:String,
    govt_id:String,
    name:String,
    dob:String,
    gender:String,
    mobile_no:String,
    email:String,
    address:String,
    password:String,
    date:{
        type:Date,
        default:Date.now
      },
});

module.exports=mongoose.model("admins",adminSchema);