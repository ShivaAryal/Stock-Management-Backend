const Bhush = require('./../../models/Stocks/BhushStock');

const getBhushStock = () => new Promise((resolve,reject)=>{
    Bhush.find({},(err,stock)=>{
        err && reject(err) || resolve(stock)
    })
})

const postBhushStock = (stock) => new Promise((resolve,reject)=>{
    let bhushStock = {}
    Bhush.findOne({good:stock.good},(err,bhush)=>{
        if(err) reject(err)
        else if(!bhush){
            bhushStock.good = stock.good
            bhushStock.unitPrice = stock.unitPrice
            bhushStock.noofPackets = stock.noofPackets
            let bhushData = new Bhush(bhushStock);
            bhushData.save((err,res)=>{
                err && reject(err) || resolve(res)
            })
        }else{
            bhush._id = bhush._id
            bhush.good = bhush.good
            bhush.noofPackets = bhush.noofPackets + stock.noofPackets
            bhush.unitPrice = bhush.unitPrice
            bhush.save((err,res)=>{
                err && reject(err) || resolve(res)
            })
        }
    })
})

module.exports ={
    getBhushStock,postBhushStock
}