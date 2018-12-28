const router = require('express').Router();
const response = require('./../utils');
const helper = require('./../utils/helper');

const chamalController = require('./../controllers/sales/ChamalSales');
const kanikaController = require('./../controllers/sales/KanikaSales');
const branController = require('./../controllers/sales/BranSales');
const bhushController = require('./../controllers/sales/BhushSales');
const monthController = require('./../controllers/sales/MonthSales');

router.get('/chamalSales',helper.authenticated,(req,res)=>{
    chamalController.getChamalSales().then(sales=>{
        response.sendDataSuccess(res,"",sales)
    }).catch(err=>response.sendDataError(res,err));
})

router.post('/chamalSales',helper.authenticated,(req,res)=>{
    chamalController.postChamalSales(req.body).then(sales=>{
        response.sendDataSuccess(res,"",sales);
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

router.get('/kanikaSales',helper.authenticated,(req,res)=>{
    kanikaController.getKanikaSales().then(sales=>{
        response.sendDataSuccess(res,"",sales);
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

router.post('/kanikaSales',helper.authenticated,(req,res)=>{
    kanikaController.postKanikaSales(req.body).then(sales=>{
        response.sendDataSuccess(res,"",sales);
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

router.get('/branSales',helper.authenticated,(req,res)=>{
    branController.getBranSales().then(sales=>{
        response.sendDataSuccess(res,"",sales);
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

router.post('/branSales',helper.authenticated,(req,res)=>{
    branController.postBranSales(req.body).then(sales=>{
        response.sendDataSuccess(res,"",sales);
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

router.get('/bhushSales',helper.authenticated,(req,res)=>{
    bhushController.getBhushSales().then(sales=>{
        response.sendDataSuccess(res,"",sales);
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

router.post('/bhushSales',helper.authenticated,(req,res)=>{
    bhushController.postBhushSales(req.body).then(sales=>{
        response.sendDataSuccess(res,"",sales);
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

router.get('/monthlySales',helper.authenticated,(req,res)=>{
    monthController.getMonthlySales().then(sales=>{
        response.sendDataSuccess(res,"",sales);
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

router.get('/monthlySales/:month',helper.authenticated,(req,res)=>{
    monthController.getCurrenMonthSale(month).then(sale=>{
        response.sendDataSuccess(res,"",sale);
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

module.exports = router;