const router = require('express').Router();
const response = require('./../utils');
const helper = require('./../utils/helper');

const chamalController = require('./../controllers/sales/ChamalSales');
const kanikaController = require('./../controllers/sales/KanikaSales');
const branControlller = require('./../controllers/sales/BranSales');
const bhushController = require('./../controllers/sales/BhushSales');

router.get('/chamalSales',helper.authenticated,(req,res)=>{
    chamalController.getChamalSales().then(sales=>{
        response.sendDataSuccess(res,"",sales)
    }).catch(err=>response.sendDataError(res,err));
})

router.post('/chamalSales',helper.authenticated,(req,res)=>{
    chamalController.postChamalSales(req.body).then(sales=>{
        response.sendDataSuccess(res,"",sales);
    }).catch(err=>{
        respomse.sendDataError(res,err);
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
    kanikaController.postkanikaSales(req.body).then(sales=>{
        response.sendDataSuccess(res,"",sales);
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

router.get('/branSales',helper.authenticated,(req,res)=>{
    branControlller.getBranSales().then(sales=>{
        response.sendDataSuccess(res,"",sales);
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

router.post('/branSales',helper.authenticated,(req,res)=>{
    branControlller.postBranSales(req.body).then(sales=>{
        response.sendDataSuccess(res,"",err);
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
    bhushControlller.postBhushSales(req.body).then(sales=>{
        response.sendDataSuccess(res,"",err);
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

module.exports = router;