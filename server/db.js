const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/blogapp')

mongoose.connection.on('connected',()=>{
    console.log('Mongoose is connected');
})

mongoose.connection.on('error',(err)=>{
    console.log("mongoose connection error",err);
})
module.exports=mongoose;