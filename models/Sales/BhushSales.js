const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BhushSchema = new Schema({
    goodName:{type:String,required:[true,"Good name is required"],minlength:[3,"Name must be more than 3 characters"],maxlength:[15,"Name must be less than 15 characters"]},
    customerName:{type:String,required:[true,"Customer name is required"],minlength:[3,"Name must be more than 3 characters"],maxlength:[15,"Name must be less than 15 characters"]},
    unitPacketPrice:{type:Number,required:[true,"Unit packet price is required"],min:[2,"Price must be supplied"]},
    unitPacketWeight:{type:Number,required:[true,"Unit packet weight is required"],min:[2,"Weight must be supplied"]},
    noofPackets:{type:Number,required:[true,"No of packets must be supplied"]},
    totalPrice:{type:Number,required:[true,"Total Price must be supplied"]}
})

let BhushSales = mongoose.model('BhushSales',BhushSchema)
module.exports = BhushSales;