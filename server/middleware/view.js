const { checklogin, anyauth } = require('../basicauth')
const {users, ROLE}=require('../models/data')
const express=require('express')
const router=express.Router()


router.get('/',checklogin,(req,res)=>{
   if(req.user.role==='admin')
     res.json(users)
     const basicUsers = users.filter(user => user.role === 'basic');
     const basicUserNames = basicUsers.map(user => user.name);
     res.json(basicUsers);
})
module.exports=router