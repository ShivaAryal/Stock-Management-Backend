const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ownerSchema = new Schema({
    name:{type:String,required:[true,"Owner name must be supplied"],minlength:[5,"Name must be more than 5 characters"]},
    address:{type:String,required:[true,"Owner Address must be supplied"],minlength:[5,"Address must be more than 5 characters"]},
    contactNumber:{type:Number,required:[true,"Contact Number must be supplied"]}
})

let Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;