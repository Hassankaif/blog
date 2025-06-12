const express= require('express');
const cors=require('cors');
const bodyParser = require('body-parser');
const db=require('./db');
const userroute=require('./routes/userApi');



app=express()

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const PORT=process.env.PORT || 8000;

//routes
app.get('/', (req,res)=>{
console.log("welcome to mern app") // terminal
return res.send("welcome to mern app") // webpage
})

//post- registration api
app.use('/api/user', userroute)

//server running
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})