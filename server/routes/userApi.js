const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs')
const validator = require('validator');



// http://localhost:8000/api/user/adduser
router.post('/adduser', async (req, res) => {
    try {
        const newuserdata = new User({
            user_name: req.body.user_name,
            user_email: req.body.user_email,
            user_password: bcrypt.hashSync(req.body.user_password),
            gender: req.body.gender
        })
        if (validator.isEmail(newuserdata.user_email)){
        const savenewuser = await newuserdata.save();
        res.json(savenewuser)
        }
    } catch (error) {
        res.status(400).send("error occured at userapi.js : "+ error.message)
    }
})

// http://localhost:8000/api/user/viewusers
router.get('/viewusers', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);

    } catch (error) {
        res.status(400).send("error occured at userapi.js : ", error)
    }
})

// http://localhost:8000/api/user/info/6848474ec65d484843d2343f
router.get('/info/:userid', async (req, res) => {
    const uid = req.params.userid;
    try {
        const userdata = await User.findById(uid);
        res.json(userdata);
    } catch (error) {
        res.status(400).send("error occured at userapi.js : ", error)
    }
})

// http://localhost:8000/api/user/info/6848474ec65d484843d2343f
router.put('/update/:id', async (req, res) => {
    const uid = req.params.id;
    try {
        const users = await User.findByIdAndUpdate(uid, req.body, { new: true })
        res.json(users)
    } catch (error) {
        res.status(400).send('Error at put user api', error)
    }
})

// http://localhost:8000/api/user/updatename/6848474ec65d484843d2343f
router.patch('/updatename/:id', async(req,res)=>{
    const uid=parseInt(req.params.id);
    try {
        const {newname}=req.body;
        const user= await User.findOne({_id: new mongoose.Types.ObjectId(uid)});
        user.user_name=newname;
        await user.save();
        res.status(200).json("USER NAME UPDATED");

    } catch (error) {
        res.json('error occured at userapi.js : '+ error)
    }
})


// http://localhost:8000/api/user/delete/6848474ec65d484843d2343f
router.delete('/delete/:id', async (req, res) => {
    uid = req.params.id;
    try {
        const del = await User.findByIdAndDelete(uid);
        res.status(200).send('user deleted successfully')
    } catch (error) {
        res.status(400).send('Error occured at delete user api', error)
    }
})


module.exports = router;