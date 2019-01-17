const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kanikaSchema = new Schema({
    month:{type:Number,required:[true,"Month is required"]},
    total:{type:Number,required:[true,"Total Price is required"]}
})

let KanikaMonthlySales = mongoose.model('KanikaMonthlySales',kanikaSchema)
module.exports = KanikaMonthlySales;