const moongoose=require('mongoose')
const userAccount= new moongoose.Schema(
    {
        name:{type:String},
        fullname:{type:String},
        email:{type:String},
        picture:{type:String}
    }
)
module.exports=moongoose.model('New-Users',userAccount)