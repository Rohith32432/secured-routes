const { Schema, model, default: mongoose } = require("mongoose");

const leadschema=new Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    role:{
        type:String,
        default:"lead"
    },
    users:[
        { type: Schema.Types.ObjectId, ref: 'user' }
    ]

})
exports.plead= mongoose.model('lead',leadschema)