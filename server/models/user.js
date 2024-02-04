const { Schema, model, default: mongoose } = require("mongoose");

const userschema=new Schema({
    name:{type:String},
    password:{type:String},
    email:{type:String},
    role:{
        type:String,
        default:"user"
    }
    

})
exports.sample=mongoose.model('user',userschema)