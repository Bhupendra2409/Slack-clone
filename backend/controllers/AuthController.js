const User = require('../models/User')
const jwt = require('jsonwebtoken');
const sendEmail = require('../utils/sendEmail')
const crypto = require('crypto');
const ErrorResponse = require('../utils/errorResponse');


const register = async (req,res,next)=>{
    
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        return next(new ErrorResponse("Provide valid name,email,password",400))
    }
    try{
        const exists = await User.findOne({email:email});
        if(exists){
            return next(new ErrorResponse("Already registered!",400));
        }
        else{
            const newUser = await User.create({
                name,email,password
            });
    
            sendToken(newUser,201,res);
        }
        
    }
    catch(error){
        
        next(error);
    }
}

const login = async (req,res,next)=>{
    const {email,password} = req.body;

    try{
        const user = await User.findOne({email}).select('+password');
        if(!user){
            return next(new ErrorResponse("No user Found!",400))
        }
        else{
            const isMatch = await user.matchPassword(password);
            if(!isMatch){
                return next(new ErrorResponse("Invalid credentials!",400))
            }
            
            sendToken(user,200,res);
        }
    }
    catch(error){
        next(error);
    }
    
}
const refreshToken = (req,res,next)=>{
    const r_token = req.body.refreshtoken;
    jwt.verify(refreshtoken,'refreshsecret Value',function(err,decode){
        if(err){
            res.status(400).json({
                error: err
            })
        }
        else{
            let token = jwt.sign({name:decode.name},'secretValue',{expiresIn:"1h"})
            let refreshtoken = req.body.refreshtoken
            res.status(200).json({
                message:'Token refreshed successfully',
                token,
                refreshtoken
            })
        }
    })
}

const sendToken = (user,statusCode,res)=>{
    const token = user.getSignedToken();
    res.status(statusCode).json({
        success:true,
        token
    })
}

const forgotPassword = async (req,res,next)=>{
    const {email} = req.body;
    try{
        
        const user = await User.findOne({email});
        if(!user){
            return next(new ErrorResponse("Email could not be sent",404));
        }

        const resetToken = user.getResetPasswordToken();

        await user.save();

        const resetUrl = `http://localhost:${process.env.PORT_FRONTEND}/resetpassword/${resetToken}`

        const message = `
        <h1> You have requested a password reset </h1>
        <p>Please go to this link to reset your password</p>
        <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
        `
        try{
            await sendEmail({
                to: user.email,
                subject: "Password reset request",
                text:message,
            }) ;
            res.status(200).json({success:true, data: "Email Sent"}) ;
        }
        catch(error){
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;
            await user.save();

            return next(new ErrorResponse("Email could not be sent",500));;
        }
    }
    catch(error){
        next(error);
    }
}

const resetPassword = async (req,res,next)=>{
    if(req.body.password.length<6){
        return next(new ErrorResponse("Password length must be atleast 6",400));
    }
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.resettoken).digest("hex");
    try{
        const user = await User.findOne({
            resetPasswordToken, 
            resetPasswordExpire: {$gt: Date.now()}
        })
        if(!user){
            return next(new ErrorResponse("Invalid Reset Token",400))
        }
        else{
            user.password = req.body.password;
            user.resetPasswordToken = undefined;
            user.resestPasswordExpire = undefined;
            
            await user.save();

            res.status(201).json({
                success:true,
                data: "Password resest successfully"
            })
        }

    }
    catch(error){
        console.log("error hua kuch");
        return next(error);
    }
}

module.exports = {
    register,
    login,
    refreshToken,
    forgotPassword,
    resetPassword
}