const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bhushSchema = new Schema({
    month:{type:Number,required:[true,"Month is required"]},
    total:{type:Number,required:[true,"Total Price is required"]}
})

let BhushMonthlySales = mongoose.model('BhushMonthlySales',bhushSchema)
module.exports = BhushMonthlySales;