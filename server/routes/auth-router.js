const express = require('express')
const router = express.Router();
const authController = require('./controllers/auth-controller');


const User = require('./models/user');


router.post('/signup' , (req,res, next) => {
    let firstname = req.body.firstnameame;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let password = req.body.password;
    let confirmpassword = req.body.confirmpassword;

    if(!firstname){
        res.send({sts: -1, error: 'firstname is required'});
    }else if(!lastname){
        res.send({sts: -1, error: 'lastname is required'});
    }else if(!email){
        res.send({sts: -1, error: 'email is required'});
    }else if(!password){
        res.send({sts: -1, error: 'password is required'});
    }else if(!confirmpassword){
        res.send({sts: -1, error: 'confirmpassword is required'});
    }else {
        authController.signup(req,res);
    }


})

module.exports = router;