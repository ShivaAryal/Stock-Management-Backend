const router = require('express').Router();
const response = require('./../utils');
const helper = require('./../utils/helper');

const ownerController = require('./../controllers/owner');
const purchaseController = require('./../controllers/purchase');

router.get('/',helper.authenticated,(req,res)=>{
    ownerController.getOwners().then(owners=>{
        response.sendDataSuccess(res,"",owners)
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

router.get('/monthlyPurchases',helper.authenticated,(req,res)=>{
    purchaseController.getMonthlyPurchases().then(purchases=>{
        response.sendDataSuccess(res,"",purchases);
    }).catch(err=>{
        response.sendDataError(res,err)
    })
})

router.post('/',helper.authenticated,(req,res)=>{
    ownerController.postOwner(req.body).then(owner=>{
        response.sendDataSuccess(res,"",owner)
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

module.exports = router;