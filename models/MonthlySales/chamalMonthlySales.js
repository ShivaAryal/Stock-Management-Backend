const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chamalSchema = new Schema({
    month:{type:Number,required:[true,"Month is required"]},
    total:{type:Number,required:[true,"Total Price is required"]}
})

let ChamalMonthlySales = mongoose.model('ChamalMonthlySales',chamalSchema)
module.exports = ChamalMonthlySales;