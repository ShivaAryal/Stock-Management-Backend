const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BoughtGood = require('./boughtGood')
const Customer = require('./customer');
let soldSchema = new Schema({
    good:{type:Schema.Types.ObjectId,ref:'BoughtGood',required:[true,"Good id must be supplied"]},
    goodName:{type:String,required:[true,"Good name must be supplied"]},
    customer:{type:Schema.Types.ObjectId,ref:'Customer',required:[true,"Customer id must be supplied"]},
    customerName:{type:String,minlength:[5,"Must be at least 5 characters"],maxlength:[15,"Must be less than 30 characters"]},
    unitSellingPrice:{type:Number},
    noOfGood:{type:Number},
    dateofSelling:{type:Date},
    totalPrice:{type:Number},
    paidAmount:{type:Number},
    remainingAmount:{type:Number}
})

let SoldGood = mongoose.model('SoldGood',soldSchema);

module.exports=SoldGood;

