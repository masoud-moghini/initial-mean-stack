const express = require('express');
const router = express.Router();
const {HasRole,PrintRole} = require('./../middlewares/middleware')

router.get('/buy',PrintRole,(req,res)=>{
    //res.render('index.hbs');
    //res.send({name:'masoud'})
    res.redirect('/hey')
})
router.get('/hey',HasRole('fine'),(req,res)=>{
    console.log(req.get('referer'));
    res.send('hi');
})


module.exports=router;