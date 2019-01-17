const MonthlyPurchase = require('./../models/monthlyPurchase');

const getMonthlyPurchases = ()=> new Promise((resolve,reject)=>{
    MonthlyPurchase.find({},(err,purchases)=>{
        err && reject(err) || resolve(purchases);
    })
})

module.exports = {
    getMonthlyPurchases
}