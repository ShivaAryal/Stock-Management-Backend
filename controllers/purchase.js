const MonthlyPurchase = require('./../models/monthlyPurchase');
const DhanPurchase = require('./../models/DhanPurchase');

const getMonthlyPurchases = ()=> new Promise((resolve,reject)=>{
    MonthlyPurchase.find({},(err,purchases)=>{
        err && reject(err) || resolve(purchases);
    })
})

const getDhanPurchase = () => new Promise((resolve,reject)=>{
    DhanPurchase.find({},(err,dhans)=>{
        err && reject(err) || resolve(dhans)
    })
})

const editDhanPurchase = (purchase)=> new Promise((resolve,reject)=>{
    DhanPurchase.findOne({_id:purchase.id},(err,res)=>{
        console.log("res",res)
        console.log("err",err)
        console.log("purchase",purchase)
        if(err) reject(err)
        res.good = purchase.good
        res.unitPrice = purchase.unitPrice
        res.noofPackets = purchase.noofPackets
        res.date = purchase.date
        res.save((err,data)=>{
            err && reject(err) || resolve(data)
        })
    })
})

const deleteDhanPurchase = (id) => new Promise((resolve,reject)=>{
    DhanPurchase.deleteOne({_id:id},(err,purchase)=>{
        err && reject(err) || resolve(purchase)
    })
})

module.exports = {
    getMonthlyPurchases, getDhanPurchase, editDhanPurchase, deleteDhanPurchase
}