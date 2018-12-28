const Bran = require('./../../models/Sales/BranSales');
const MonthlySales = require('./../../models/Sales/MonthlySales');

const getBranSales = () => new Promise((resolve,reject)=>{
    Bran.find({},(err,sales)=>{
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

const postBranSales = (sales) => new Promise((resolve,reject)=>{
    let saleData = new Bran(sales);
    saleData.save((err,sales)=>{
        // err && reject(err) || resolve(sales)
        if(err) reject(err);
        MonthlySales.findOne({month:parseInt(sales.date.slice(5,7))},(err,monthlySale)=>{
            let myMonthSale = {}
            if(err) reject(err);
            else if(!monthlySale){
                myMonthSale.month=parseInt(sales.date.slice(5,7))
                myMonthSale.total = sales.unitPrice*sales.noofPackets
                myMonthSale.profit =sales.unitPrice*sales.noofPackets
                let monthData = new MonthlySales(myMonthSale);
                monthData.save((err,data)=>{
                    err && reject(err) || resolve(sales)
                })
            }else{
                monthlySale._id = monthlySale._id,
                monthlySale.month = monthlySale.month,
                monthlySale.total = monthlySale.total + sales.unitPrice*sales.noofPackets
                monthlySale.profit = monthlySale.profit + sales.unitPrice*sales.noofPackets
                monthlySale.save((err,data)=>{
                    err && reject(err) || resolve(sales)
                })
            }
        })

    })
})

module.exports={
    getBranSales,postBranSales
}