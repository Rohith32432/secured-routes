function checklogin(req,res,next){

    if(req.user==null){
        res.status(401)
         return res.send('you nedd to login')
    }
    console.log(req.user.role);
    next()
}
function roleauth(role){
        return (req, res, next) => {
          if (req.user.role !== role) {
            res.status(401)
            return res.send('Not allowed')
          }
      
          next()
        }
      }
      function anyauth(role){
        return (req, res, next) => {
          if (req.user.role !== role) {
            res.status(401)
            return res.send('Not allowed')
          }
      
          next()
        }
      }
module.exports= {checklogin,roleauth,anyauth}