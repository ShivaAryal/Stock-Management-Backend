const Chamal = require('./../../models/Sales/ChamalSales');

const getChamalSales = () => new Promise((resolve,reject)=>{
    Chamal.find({},(err,sales)=>{
        err && reject(err) || resolve(err);
    })
})

const postChamalSales = (sales) => new Promise((resolve,reject)=>{
    let saleData = new Chamal(sales);
    saleData.save((err,sales)=>{
        
    })
})