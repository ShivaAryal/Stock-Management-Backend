const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MonthSchema = new Schema({
    month:{
        type:Number,
        required:[true,"Month  name is required"]
    },
    total:{
        type:Number,
        required:[true,"Sale amount is required"]
    },
    profit:{
        type:Number,
        required:[true,"Profit amount is required"]
    }
})

let MonthlySales = mongoose.model('MonthlySales',MonthSchema)
module.exports = MonthlySales;