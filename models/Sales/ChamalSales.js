const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChamalSchema = new Schema({
    customer:{type:String,required:[true,"Customer name is required"],minlength:[3,"Name must be more than 3 characters"],maxlength:[15,"Name must be less than 15 characters"]},
    unitPrice:{type:Number,required:[true,"Unit packet price is required"],min:[2,"Price must be supplied"]},
    noofPackets:{type:Number,required:[true,"No of packets must be supplied"]},
    date:{type:String,required:[true,"Date is required"]}
})

let ChamalSales = mongoose.model('ChamalSales',ChamalSchema)
module.exports = ChamalSales;