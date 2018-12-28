const Dhan = require('./../../models/Stocks/DhanStock');

const getDhanStock = () => new Promise((resolve,reject)=>{
    Dhan.find({},(err,stock)=>{
        err && reject(err) || resolve(stock)
    })
})

const postDhanStock = (stock) => new Promise((resolve,reject)=>{
    let dhanStock = {}
    Dhan.findOne({good:stock.good},(err,dhan)=>{
        if(err) reject(err);
        else if(!dhan){
            dhanStock.good=stock.good
            dhanStock.unitPrice = stock.unitPrice
            dhanStock.noofPackets = stock.noofPackets
            let dhanData = new Dhan(dhanStock);
            dhanData.save((err,res)=>{
                err && reject(err) || resolve(res);
            })
        }
        else{
            dhan._id = dhan._id
            dhan.good = dhan.good
            dhan.noofPackets = dhan.noofPackets + stock.noofPackets
            dhan.unitPrice = dhan.unitPrice
            dhan.save((err,res)=>{
                err && reject(err) || resolve(res);
            })
        }
    })
})

module.exports ={
    getDhanStock,postDhanStock
}