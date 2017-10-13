const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('index.html');
    //res.send({name:'masoud'})
})


module.exports=router;