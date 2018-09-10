const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name:{type:String,required:[true,"Customer name must be provided"],minlength:[5,"Name must be more than 5 characters"]},
    address:{type:String,required:[true,"Customer address must be provided"],minlength:[5,"Address must be more than 5 characters"]},
    contactNumber:{type:Number,required:[true,"Contact number must be supplied"],min:[6,"Must be at least 6 digits"]},
    remainingAmount:{type:Number}
})
let Customer = mongoose.model('Customer',customerSchema);
module.exports= Customer;