const { Schema, model } = require("mongoose");

const adminschema=new Schema({
    name:{type:String},
    password:{type:String},
    role:{
        type:String,
        default:"admin"
    }

})
module.exports=new model('admin',adminschema)