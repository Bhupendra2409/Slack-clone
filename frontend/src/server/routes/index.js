const express = require('express');

const router = express.Router();


router.get('/',(req,res)=>{
    res.send('hello');
    console.log(req);
})

router.post('/login',function(req,res){
    console.log(req.body);
    res.status(200).send('hello there')
})



module.exports=router;