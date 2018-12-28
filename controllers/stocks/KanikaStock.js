const Kanika = require('./../../models/Stocks/KanikaStock');

const getKanikaStock = () => new Promise((resolve,reject)=>{
    Kanika.find({},(err,stock)=>{
        err && reject(err) || resolve(stock)
    })
})

const postKanikaStock = (stock) => new Promise((resolve,reject)=>{
    let KanikaData = new Kanika(stock)
    KanikaData.save((err,kanika)=>{
        err && reject(err) || resolve(kanika)
    })
})

module.exports ={
    getKanikaStock,postKanikaStock
}