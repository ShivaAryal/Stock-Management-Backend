const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dhanPurchaseSchema = new Schema({
    good:{type:String,required:[true,"Good name is required"]},
    unitPrice:{type:Number,required:[true,"Unit Price is required"]},
    noofPackets:{type:Number,required:[true,"No of Packets is required"]},
    date:{type:String,required:[true,"Date is required"]}
})

let DhanPurchase = mongoose.model('DhanPurchase',dhanPurchaseSchema);
module.exports = DhanPurchase