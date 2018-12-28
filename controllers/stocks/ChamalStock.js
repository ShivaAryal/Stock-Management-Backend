const Chamal = require('./../../models/Stocks/ChamalStock');

const getChamalStock = () => new Promise((resolve,reject)=>{
    Chamal.find({},(err,stock)=>{
        err && reject(err) || resolve(stock)
    })
})

const postChamalStock = (stock) => new Promise((resolve,reject)=>{
    let chamalStock = {}
    Chamal.findOne({good:stock.good},(err,chamal)=>{
        if(err) reject(err)
        else if(!chamal){
            chamalStock.good = stock.good
            chamalStock.unitPrice = stock.unitPrice
            chamalStock.noofPackets = stock.noofPackets
            let chamalData = new Chamal(chamalStock);
            chamalData.save((err,res)=>{
                err && reject(err) || resolve(res)
            })
        }else{
            chamal._id = chamal._id
            chamal.good = chamal.good
            chamal.noofPackets = chamal.noofPackets + stock.noofPackets
            chamal.unitPrice = chamal.unitPrice
            chamal.save((err,res)=>{
                err && reject(err) || resolve(res)
            })
        }
    })
})

module.exports ={
    getChamalStock,postChamalStock
}