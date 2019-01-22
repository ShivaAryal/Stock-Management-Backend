const Kanika = require('./../../models/Sales/KanikaSales');
const MonthlySales = require('./../../models/Sales/MonthlySales');
const KanikaMonthlySales = require('./../../models/MonthlySales/kanikaMonthlySales');

const getKanikaSales = () => new Promise((resolve,reject)=>{
    Kanika.find({},(err,sales)=>{
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

const getKanikaMonthlySales = () => new Promise((resolve,reject)=>{
    KanikaMonthlySales.find({},(err,sales)=>{
        err && reject(err) || resolve(sales)
    })
})

const postKanikaSales = (sales) => new Promise((resolve,reject)=>{
    let saleData = new Kanika(sales);
    saleData.save((err,sales)=>{
        if(err) reject(err);

        KanikaMonthlySales.findOne({month:parseInt(sales.date.slice(5,7))},(err,monthlySale)=>{
            let myMonthSale = {}
            if(err) reject(err)
            else if(!monthlySale){
                myMonthSale.month = parseInt(sales.date.slice(5,7))
                myMonthSale.total = sales.unitPrice * sales.noofPackets
                let monthData = new KanikaMonthlySales(myMonthSale)
                monthData.save((err,data)=>{
                    err && reject(err) || resolve(sales)
                })
            }else{
                monthlySale.month = monthlySale.month
                monthlySale.total = monthlySale.total + sales.unitPrice * sales.noofPackets
                monthlySale.save((err,data)=>{
                    err && reject(err) || resolve(sales)
                })
            }
        })

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

const editKanikaSale = (sale) => new Promise((resolve,reject)=>{
    Kanika.findOne({_id:sale.id},(err,mySale)=>{
        if(err) reject(err);
        mySale.customer = sale.customer
        mySale.unitPrice = sale.unitPrice
        mySale.noofPackets = sale.noofPackets
        mySale.date = sale.date
        mySale.save((err,data)=>{
            err && reject(err) || resolve(data)
        })
    })
})

const deleteKanikaSale = (id) => new Promise((resolve,reject)=>{
    Kanika.deleteOne({_id:id},(err,data)=>{
        err && reject(err) || resolve(data)
    })
})

module.exports={
    getKanikaSales,postKanikaSales, getKanikaMonthlySales, editKanikaSale, deleteKanikaSale
}