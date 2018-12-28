const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    name:{type:String,required:[true,'Expense name is required']},
    date:{type:String,required:[true,'Expense date is required']},
    price:{type:String,required:[true,'Expense amount is required']}
})

let Expense = mongoose.model('Expense',expenseSchema);

module.exports = Expense;