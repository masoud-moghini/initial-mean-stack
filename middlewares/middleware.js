module.exports={
    HasRole:(role)=>{
        return function (req,res,next) {
           console.log(role);
           req.session.role = role;
           console.log(req.session.role);
           next() 
        }
        
    },
    PrintRole:(req,res,next)=>{
        console.log(req.session.role);
        next()
    }
}