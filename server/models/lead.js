const { Schema, model } = require("mongoose");

const leadschema=new Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    role:{
        type:String,
        default:"lead"
    }

})
module.exports=new model('admin',leadschema)