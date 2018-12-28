const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const adminSchema = new Schema({
    name:{type:String,required:[true,"Admin name must be provided"],minlength:[3,"Name must be more than 3 characters"]},
    email: {type:String, required: [true, "Email is required"]},
    password: {type: String, required: [true, "Password is required"],minlength: [5, "Password should have more than 5 characters"],maxlength: [200, "Password should have less than 200 characters"]},
    address:{type:String,required:[true,"Admin address must be provided"],minlength:[3,"Address must be more than 3 characters"]},
    phoneNumber:{type:Number,required:[true]}
})
adminSchema.pre('save',function(next){
    if(this.isModified("password")){
        this.password=bcrypt.hashSync(this.password)
    }
    next();
})

let Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;