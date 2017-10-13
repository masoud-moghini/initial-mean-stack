const express = require('express');
const router = express.Router();

const array=['10','12']

router.get('/',(req,res)=>{
    res.send({'array':array});
    console.log('arrived api.js');
})

module.exports=router;