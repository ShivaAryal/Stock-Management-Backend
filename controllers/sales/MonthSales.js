const MonthlySales = require('./../../models/Sales/MonthlySales');

const getMonthlySales = () => new Promise((resolve,reject)=>{
    MonthlySales.find({},(err,sales)=>{
        err && reject(err) || resolve(sales)
    })
})

const getCurrentMonthSale = (month) => new Promise((resolve,reject)=>{
    MonthlySales.findOne({month:month},(err,sale)=>{
        err && reject(err) || resolve(sale)
    })
})

module.exports  = {
    getMonthlySales,getCurrentMonthSale
}