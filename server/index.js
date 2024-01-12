const fs=require('fs')
const express=require('express');
const server=express()
const moongose=require('mongoose')
const {users, ROLE}=require('./models/data')
const {checklogin,roleauth}=require('./basicauth.js')
const view = require('./middleware/view.js')
const data=require('./data.js')
const cors=require('cors')
server.use(express.json())
server.use(cors())
// server.use(setUser)
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
server.post('/validate', (req, res) => {
  const pwd=req.body.pwd
  const email=req.body.email
  const chk=data.find(user=>user.email===email && user.password==pwd)
  res.json(chk);
  console.log(req.body);
});


server.get('/viewall',(req,res)=>{
  res.send(data)
})

// function setUser(req, res, next) {
//   const userId = req.body.userid
//   console.log(userId);
//   if (userId) {
//     req.user = users.find(user => user.id === userId)
//   }
//   next()
// }

server.listen(32432,()=>{
    console.log("server started at 32432");
})