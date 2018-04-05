const express = require('express');
const router = express.Router();
const {HasRole,PrintRole} = require('./../middlewares/middleware')

router.get('/',PrintRole,(req,res)=>{
    res.render('index.hbs');
    //res.send({name:'masoud'})
})
router.get('/hey',HasRole('fine'),(req,res)=>{
    res.send('hi')
})


module.exports=router;