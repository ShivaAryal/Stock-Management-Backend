const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const monthPurchaseSchema = new Schema({
    month:{type:Number,required:[true,'Purchase month is required']},
    total:{type:Number,required:[true,"Purchase total is required"]}
})

let MonthlyPurchase = mongoose.model('MonthlyPurchase',monthPurchaseSchema);

module.exports = MonthlyPurchase;