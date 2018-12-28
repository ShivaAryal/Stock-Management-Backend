const Chamal = require('./../../models/Sales/ChamalSales');
const Dhan = require('./../../models/Stocks/DhanStock');
const MonthlySales = require('./../../models/Sales/MonthlySales');

const getChamalSales = () => new Promise((resolve,reject)=>{
    Chamal.find({},(err,sales)=>{
        let salesArr = []
        sales.map((sale,i)=>{
            let saleObj = {
                _id:sale._id,
                customer:sale.customer,
                unitPrice:sale.unitPrice,
                noofPackets:sale.noofPackets,
                date:sale.date,
                total:sale.unitPrice*sale.noofPackets
            }
            salesArr.push(saleObj)
        })
        err && reject(err) || resolve(salesArr);
    })
})

const getUnitPrice = ()=>new Promise((resolve,reject)=>{
    Dhan.find({},(err,res)=>{
        if(err) reject(err);
        let dhanPriceArr = []
        res.map((dhan,i)=>{
            dhanPriceArr.push(dhan.unitPrice)
        })
        resolve(dhanPriceArr)
    })
})

const postChamalSales = (sales) => new Promise((resolve,reject)=>{
    var myMonthSale = {}
    let saleData = new Chamal(sales);
    saleData.save((err,sales)=>{
        if(err) reject(err);
        Dhan.find({},(err,dhanStock)=>{
            if(err) reject(err)
            dhanStock.map((stock,i)=>{
                let dhanData = new Dhan(stock);
                dhanData._id=stock._id
                dhanData.good = stock.good,
                dhanData.unitPrice= stock.unitPrice,
                stock.good=='Masino Dhan' ? dhanData.noofPackets = Math.round((stock.noofPackets-sales.noofPackets*0.72)*100)/100:dhanData.noofPackets = Math.round((stock.noofPackets-sales.noofPackets*0.28)*100)/100 
                dhanData.save((err,updated)=>{
                    err && reject(err) || resolve(sales)
                })
            })
        })

        MonthlySales.findOne({month:parseInt(sales.date.slice(5,7))},(err,monthlySale)=>{
            
            if(err) reject(err);
            else if(!monthlySale){
                console.log("i m here")
                myMonthSale.month=parseInt(sales.date.slice(5,7))
                myMonthSale.total = sales.unitPrice*sales.noofPackets
                getUnitPrice().then(res=>{
                    myMonthSale.profit = sales.unitPrice*sales.noofPackets- sales.noofPackets *0.72*res[0]-sales.noofPackets *0.28*res[1]
                    let monthData = new MonthlySales(myMonthSale);
                    monthData.save((err,data)=>{
                        err && reject(err) || resolve(sales)
                    })
                })
            }else{
                monthlySale._id = monthlySale._id,
                monthlySale.month = monthlySale.month,
                monthlySale.total = monthlySale.total + sales.unitPrice*sales.noofPackets
                getUnitPrice().then(res=>{
                    myMonthSale.profit = monthlySale.profit+sales.unitPrice*sales.noofPackets- sales.noofPackets *0.72*res[0]-sales.noofPackets *0.28*res[1]
                    let monthData = new MonthlySales(myMonthSale);
                    monthData.save((err,data)=>{
                        err && reject(err) || resolve(sales)
                    })
                })
            }
        })
    })
})

module.exports={
    getChamalSales,postChamalSales
}