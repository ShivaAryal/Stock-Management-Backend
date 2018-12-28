const Expense = require('./../models/expense');
const MonthlyExpense = require('./../models/monthlyExpense');
// const MonthlySales = require('./../models/Sales/MonthlySales');

const getExpense = () => new Promise((resolve,reject)=>{
    Expense.find({},(err,expenses)=>{
        console.log("gete xpeses",expenses)
        if(err) reject(err);
        let date = new Date();
        console.log("month",date.getMonth())
        let currentMonthExpense = []
        expenses.map((expense,i)=>{
            if ((date.getMonth())+1==parseInt(expense.date.slice(5,7))){
                currentMonthExpense.push(expense)
            }
        })
        resolve(currentMonthExpense)
    })
})

const addExpense = (expense) => new Promise((resolve,reject)=>{
    console.log(expense)
    let expenseData = new Expense(expense);
    expenseData.save((err,expenses)=>{
        if(err) reject(err)
        MonthlyExpense.findOne({month:parseInt(expense.date.slice(5,7))},(err,myExpense)=>{
            let newExpenseObj = {}
            console.log(myExpense)
            if(err) reject(err)
            else if(!myExpense){
                newExpenseObj.month = parseInt(expense.date.slice(5,7))
                newExpenseObj.total = expense.price;
                console.log(" i m here",newExpenseObj)
                let newExpense = new MonthlyExpense(newExpenseObj);
                newExpense.save((err,response)=>{
                    err && reject(err) || resolve(expenses)
                })
            }else{
                myExpense._id = myExpense._id
                myExpense.month = myExpense.month
                myExpense.total = myExpense.total + expense.price
                myExpense.save((err,response)=>{
                    err && reject(err) || resolve(expenses)
                })
            }
        })
    })
}) 

const getMonthlyExpenses = () => new Promise((resolve,reject)=>{
    MonthlyExpense.find({},(err,expenses)=>{
        err && reject(err) || resolve(expenses)
    })
})

// const getMonthlyProfits = () => new Promise((resolve,reject)=>{
//     MonthlySales.find({},(err,myMonthSales)=>{
//         if(err) reject(err)
//         let profitArr = []
//         myMonthSales.map((sale,i)=>{
//             MonthlyExpense.findOne({month:parseInt(sale.month)},(err,expense)=>{
//                 let thisMonthSale = {}
//                 if(err) reject(err)
//                 else if(expense){
//                     thisMonthSale.month = sale.month
//                     thisMonthSale.profit = sale.profit - expense.total
//                     profitArr.push(thisMonthSale)
//                 }
//             })
//         })
//         console.log(profitArr)
//         resolve(profitArr)
//     })
// })

module.exports={
    getExpense,addExpense,getMonthlyExpenses
}