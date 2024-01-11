const fs=require('fs')
const express=require('express');
const server=express()
const moongose=require('mongoose')
const {users, ROLE}=require('./models/data')
const {checklogin,roleauth}=require('./basicauth.js')
const view = require('./middleware/view.js')
server.use(express.json())
server.use(setUser)
server.use('/view', view)
// main().catch(err => console.log(err));
     

// async function main() {
  
//   await moongose.connect(`mongodb://127.0.0.1:27017/test`);
//   console.log('DB Connected successfully ');
// }

//user routes
server.get('/',(req,res)=>{
  res.send('index page')
})
server.get('/admin',checklogin,roleauth(ROLE.ADMIN),(req,res)=>{
  res.send('admin page')
})
server.get('/board',checklogin,(req,res)=>{
  res.send('dashboard page')
})


function setUser(req, res, next) {
  const userId = req.body.userid
  console.log(userId);
  if (userId) {
    req.user = users.find(user => user.id === userId)
  }
  next()
}

server.listen(32432,()=>{
    console.log("server started at 32432");
})