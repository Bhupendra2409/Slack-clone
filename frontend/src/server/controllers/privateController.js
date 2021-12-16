const User = require('../models/User');

const getPrivateData = (req,res,next)=>{
    console.log("here in private")
    res.status(200).json({
        success:true,
        data: "You got access to the private data"
    })
}

module.exports = {getPrivateData}