const user=require('../models/Accounts')

const addAccounts= async(req,res)=>{
    const userdata=req.body
    const Iuser=await user.create({
        name:userdata.name.split(' ')[0] +' '+ userdata.family_name,
        fullname:userdata.name,
        email:userdata.email,
        picture:userdata.picture
    }) 
    res.json('hi')
}

async function getacc(req,res){
    const data=await user.find()
    res.json(data)
}

module.exports={addAccounts,getacc}