const mongoose = require ('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema

const friendSchema = new Schema({
    email :{
        type: String,
        required : [true,"Please provide a valid email"],
        unique: true,
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/]
            
    },
    friends: {
        type: Array
    }
    
},{timestamps:true})

friendSchema.pre("save",async function(next){
        
        next();
    
})



const Friend = mongoose.model('Friend',friendSchema);

module.exports = Friend;