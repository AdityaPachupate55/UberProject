const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt');

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,"First name should be at least 3 characters"],
        },
        lastname:{
            type:String, 
            minlength:[3,"Last name should be at least 3 characters"],
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minlength: [5, "Email should be at least 5 characters"],
        match: [/^\S+@\S+\.\S+$/, "Email is not valid"]
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    socketId:{
        type:String,
    }
})

userSchema.methods.generateAuthToken=function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET)
    return token;
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};


userSchema.methods.hashPassword=async function (password) {
    return await bcrypt.hash(password,10);
}

const userModel = mongoose.model('user',userSchema);

module.exports = userModel ;




















