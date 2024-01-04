const express=require('express');
const server=express()
const moongose=require('mongoose')

main().catch(err => console.log(err));


async function main() {
  
  await moongose.connect(`mongodb://127.0.0.1:27017/test`);
  console.log('DB Connected successfully ');
}
server.listen(3001,()=>{
    console.log("server started at 3001");
})