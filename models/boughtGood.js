const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Owner = require('./owner');
let boughtGoodSchema =  new Schema({
    owner:{type:Schema.Types.ObjectId,ref:'Owner',required:[true,"Owner name must be supplied"]},
    ownerName:{type:String,required:[true,"Owner name must be supplied"]},
    goodName:{type:String,required:[true,"Good name must be supplied"]},
    unitCostPrice:{type:Number,required:[true,"Unit cost price must be supplied"]},
    noOfGood:{type:Number,required:[true,"No of Goods must be supplied"]},
    totalPrice:{type:Number,required:[true,"Total price must be supplied"]},
    boughtDate:{type:Date,required:[true,"Bought date must be supplied"]},
    paidAmount:{type:Number,required:[true,"Paid amount must be supplied"]},
    remainingAmount:{type:Number,required:[true,"Remaining amount must be supplied"]}
})
let BoughtGood = mongoose.model('BoughtGood', boughtGoodSchema);
module.exports = BoughtGood;