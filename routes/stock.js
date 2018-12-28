const router = require('express').Router()
const response = require('./../utils')
const helper = require('./../utils/helper');

const chamalController = require('./../controllers/stocks/ChamalStock');
const kanikaController = require('./../controllers/stocks/KanikaStock');
const bhushController = require('./../controllers/stocks/BhushStock');
const branController = require('./../controllers/stocks/BranStock');
const dhanController = require('./../controllers/stocks/DhanStock');

router.get('/dhanStock',helper.authenticated,(req,res)=>{
    dhanController.getDhanStock().then(stock=>{
        response.sendDataSuccess(res,"",stock)
    }).catch(err=>response.sendDataError(res,err))
})

router.post('/dhanStock',helper.authenticated,(req,res)=>{
    dhanController.postDhanStock(req.body).then(stock=>{
        response.sendDataSuccess(res,"",stock)
    }).catch(err=>response.sendDataError(res,err))
})

router.get('/chamalStock',helper.authenticated,(req,res)=>{
    chamalController.getChamalStock().then(stock=>{
        response.sendDataSuccess(res,"",stock)
    }).catch(err=>response.sendDataError(res,err))
})

router.post('/chamalStock',helper.authenticated,(req,res)=>{
    chamalController.postChamalStock(req.body).then(stock=>{
        response.sendDataSuccess(res,"",stock)
    }).catch(err=>response.sendDataError(res,err))
})

router.get('/kanikaStock',helper.authenticated,(req,res)=>{
    kanikaController.getKanikaStock().then(stock=>{
        response.sendDataSuccess(res,"",stock)
    }).catch(err=>response.sendDataError(res,err))
})

router.post('/kanikaStock',helper.authenticated,(req,res)=>{
    kanikaController.postKanikaStock(req.body).then(stock=>{
        response.sendDataSuccess(res,"",stock)
    }).catch(err=>response.sendDataError(res,err))
})

router.get('/bhushStock',helper.authenticated,(req,res)=>{
    bhushController.getBhushStock().then(stock=>{
        response.sendDataSuccess(res,"",stock)
    }).catch(err=>response.sendDataError(res,err))
})

router.post('/bhushStock',helper.authenticated,(req,res)=>{
    bhushController.postBhushStock(req.body).then(stock=>{
        response.sendDataSuccess(res,"",stock)
    }).catch(err=>response.sendDataError(res,err))
})

router.get('/branStock',helper.authenticated,(req,res)=>{
    branController.getBranStock().then(stock=>{
        response.sendDataSuccess(res,"",stock)
    }).catch(err=>response.sendDataError(res,err))
})

router.post('/branStock',helper.authenticated,(req,res)=>{
    branController.postBranStock(req.body).then(stock=>{
        response.sendDataSuccess(res,"",stock)
    }).catch(err=>response.sendDataError(res,err))
})

module.exports = router;