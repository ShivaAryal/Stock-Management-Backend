const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BhushSchema = new Schema({
    good:{type:String,required:[true,"Good name is required"],minlength:[3,"Name must be more than 3 characters"],maxlength:[15,"Name must be less than 15 characters"]},
    unitPrice:{type:Number,required:[true,"Unit packet price is required"],min:[2,"Price must be supplied"]},
    noofPackets:{type:Number,required:[true,"No of packets must be supplied"]},
})

let BhushStock = mongoose.model('BhushStock',BhushSchema)
module.exports = BhushStock;