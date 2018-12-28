const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const monthExpenseSchema = new Schema({
    month:{type:Number,required:[true,'Expense name is required']},
    total:{type:Number,required:[true,'Expense amount is required']}
})

let MonthlyExpense = mongoose.model('MonthlyExpense',monthExpenseSchema);

module.exports = MonthlyExpense;