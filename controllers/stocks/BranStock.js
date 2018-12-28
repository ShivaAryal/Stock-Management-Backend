const Bran = require('./../../models/Stocks/BhushStock');

const getBranStock = () => new Promise((resolve,reject)=>{
    Bran.find({},(err,stock)=>{
        err && reject(err) || resolve(stock)
    })
})

const postBranStock = (stock) => new Promise((resolve,reject)=>{
    let branStock = {}
    Bran.findOne({good:stock.good},(err,bran)=>{
        if(err) reject(err)
        else if(!bran){
            branStock.good = stock.good
            branStock.unitPrice = stock.unitPrice
            branStock.noofPackets = stock.noofPackets
            let branData = new Bran(branStock)
            branData.save((err,res)=>{
                err && reject(err) || resolve(res)
            })
        }else{
            bran._id = bran._id
            bran.good = bran.good
            bran.noofPackets = bran.noofPackets + stock.noofPackets
            bran.unitPrice = bran.unitPrice
            bran.save((err,res)=>{
                err && reject(err) || resolve(res)
            })
        }
    })
})

module.exports ={
    getBranStock,postBranStock
}