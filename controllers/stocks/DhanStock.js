const Dhan = require('./../../models/Stocks/DhanStock');
const MonthlyPurchase = require('./../../models/monthlyPurchase');
const DhanPurchase = require('./../../models/DhanPurchase');

const getDhanStock = () => new Promise((resolve,reject)=>{
    Dhan.find({},(err,stock)=>{
        err && reject(err) || resolve(stock)
    })
})

const postDhanStock = (stock) => new Promise((resolve,reject)=>{
    let dhanStock = {}
    let purchaseData = new DhanPurchase(stock);
    purchaseData.save((err,stock)=>{
        if(err) reject(err)
        Dhan.findOne({good:stock.good},(err,dhan)=>{
            if(err) reject(err);
            else if(!dhan){
                dhanStock.good=stock.good
                dhanStock.unitPrice = stock.unitPrice
                dhanStock.noofPackets = stock.noofPackets
                dhanStock.date = stock.date
                let dhanData = new Dhan(dhanStock);
                dhanData.save((err,res)=>{
                    err && reject(err) || resolve(res);
                })
            }
            else{
                dhan._id = dhan._id
                dhan.good = dhan.good
                dhan.noofPackets = dhan.noofPackets + stock.noofPackets
                dhan.unitPrice = stock.unitPrice
                dhan.date = stock.date
                dhan.save((err,res)=>{
                    err && reject(err) || resolve(res);
                })
            }
        })
    })
    
    MonthlyPurchase.findOne({month:parseInt(stock.date.slice(5,7))},(err,purchase)=>{
        console.log(" i m here")
        if(err) reject(err);
        let monthPurchase = {}
        if(!purchase){
            monthPurchase.month = parseInt(stock.date.slice(5,7))
            monthPurchase.total = stock.unitPrice * stock.noofPackets
            let purchaseData = new MonthlyPurchase(monthPurchase);
            purchaseData.save((err,data)=>{
                err && reject(err) || resolve(data)
            })
        }else{
            purchase.total = purchase.total + stock.unitPrice * stock.noofPackets
            purchase.save((err,data)=>{
                err && reject(err) || resolve(data)
            })
        }
    })

})

module.exports ={
    getDhanStock,postDhanStock
}