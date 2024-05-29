const User = require('./models/user');
// const appConfig = require('./app-configs');


exports.signup = async (req, res, next) =>{
    let user = new user({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword
    });


    let isEmailExist = User.checkEmailExists(user.email);
    let isFirstNameExist = User.checkFirstNameExist(user.firstname);

    if(isEmailExist){
        res.status(400).json({sts: -1, error: 'Email already exist'})
    }else if(isFirstNameExist){
        res.status(400).json({sts: -1, error: 'fisrt name exist'})
    }else {
        let savedoc = await user.save();

        if(saveDoc){
            res.status(200).json({sts: 1})
        }else {
            console.log(error);
            res.status(500).json({sts: -1, error: 'Internal server error'})
        }
    }
}