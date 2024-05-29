const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        firstname: {type: String, trim: true, required: true},
        lastname: {type: String, trim: true, required: true},
        email: {type: String, trim: true, required: true},
        password: {type: String, trim: true, required: true},
        confirmpassword: {type: String, trim: true, required: true},
    },
    {timestamps: true}
);

userSchema.static.checkEmailExists = async (email) =>{
    const doc = await mongoose.model('User').findOne({email: email}).exec();
    return doc;
};

userSchema.static.checkFirstNameExists = async (firstname) => {
    const doc = await mongoose.model('User').findOne({firstname: firstname}).exec();
    return doc;
}

module.exports = mongoose.model('User', userSchema);