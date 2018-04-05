module.exports={
    HasRole:(role)=>{
        return function (req,res,next) {
           req.session.role = role;
           //console.log('line 5 ',req.session.role);
           next() 
        }
        
    },
    PrintRole:(req,res,next)=>{
        //console.log(req.session.role);
        next()
    }
}