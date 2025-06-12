const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    user_name:{
        type: String,
        required: true
    },
    user_email:{
        type: String,
        required: true,
        unique: true
    },
    user_password:{
        type: String,
        required: true,
        unique: true
    },
    gender:{
        type: String,
        enum:['male','female'],
        required: true
    }
})

module.exports=mongoose.model('user', userSchema)