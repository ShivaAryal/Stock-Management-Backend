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

router.get('/dhanPurchases',helper.authenticated,(req,res)=>{
    purchaseController.getDhanPurchase().then(dhans=>{
        response.sendDataSuccess(res,"",dhans)
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

router.post('/editDhanPurchase',helper.authenticated,(req,res)=>{
    purchaseController.editDhanPurchase(req.body).then(purchases=>{
        response.sendDataSuccess(res,"",purchases)
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

router.post('/deleteDhanPurchase',helper.authenticated,(req,res)=>{
    purchaseController.deleteDhanPurchase(req.body.id).then(purchase=>{
        response.sendDataSuccess(res,"",purchase)
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

router.post('/editTransactioner',helper.authenticated,(req,res)=>{
    ownerController.editOwner(req.body).then(owner=>{
        response.sendDataSuccess(res,"",owner)
    }).catch(err=>{
        response.sendDBError(res,err)
    })
})

router.post('/deleteTransactioner',helper.authenticated,(req,res)=>{
    ownerController.deleteOwner(req.body.id).then(owner=>{
        response.sendDataSuccess(res,"",owner)
    }).catch(err=>{
        response.sendDBError(res,err)
    })
})

module.exports = router;