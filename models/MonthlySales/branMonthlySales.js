const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const branSchema = new Schema({
    month:{type:Number,required:[true,"Month is required"]},
    total:{type:Number,required:[true,"Total Price is required"]}
})

let BranMonthlySales = mongoose.model('BranMonthlySales',branSchema)
module.exports = BranMonthlySales;