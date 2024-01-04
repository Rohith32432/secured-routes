const { Schema, model } = require("mongoose");

const userschema=new Schema({
    name:{type:String},
    password:{type:String},
    email:{type:String},
    role:{
        type:String,
        default:"user"
    }

})
module.exports=new model('admin',userschema)