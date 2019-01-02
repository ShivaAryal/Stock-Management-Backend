const router = require('express').Router();
const response = require('./../utils');
const helper = require('./../utils/helper');

const adminController = require('./../controllers/admin');

router.post('/login',(req,res)=>{
    adminController.adminLogin(req.body.email,req.body.password).then(admin=>{
        response.sendDataSuccess(res,"",admin);
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

router.post('/',helper.authenticated,(req,res)=>{
    adminController.addAdmin(req.body).then(admin=>{
        response.sendDataSuccess(res,"",admin);
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

router.get('/',helper.authenticated,(req,res)=>{
    adminController.getAdmin().then(admins=>{
        response.sendDataSuccess(res,"",admins)
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

router.post('/editPassword',helper.authenticated,(req,res)=>{
    adminController.editPassword(req.user_id,req.body.oldPassword,req.body.newPassword).then(admin=>{
        response.sendDataSuccess(res,"",admin);
    }).catch(err=>{
        response.sendDBError(res,err)
    })
})

router.post('/addPurchaser',helper.authenticated,(req,res)=>{
    adminController.addPurchaser(req.body).then(purchaser=>{
        response.sendDataSuccess(res,"",purchaser)
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

router.get('/getPurchaser',helper.authenticated,(req,res)=>{
    adminController.getPurchaser().then(purchaser=>{
        response.sendDataSuccess(res,"",purchaser);
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

router.post('/addBoughtGood',helper.authenticated,(req,res)=>{
    adminController.addBoughtGood(req.body).then(good=>{
        response.sendDataSuccess(res,"",good)
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

router.get('/getBoughtGood',helper.authenticated,(req,res)=>{
    adminController.getBoughtGood().then(good=>{
        response.sendDataSuccess(res,"",good)
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

router.get('/getRemainingPurchaser',helper.authenticated,(req,res)=>{
    adminController.getRemainingPurchaser().then(remainings=>{
        response.sendDataSuccess(res,"",remainings)
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

router.post('/addCustomer',helper.authenticated,(req,res)=>{
    adminController.addCustomer(req.body).then(customer=>{
        response.sendDataSuccess(res,"",customer)
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

router.get('/getCustomer',helper.authenticated,(req,res)=>{
    adminController.getCustomer().then(customers=>{
        response.sendDataSuccess(res,"",customers)
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

router.get('/getCustomerTransaction/:id',helper.authenticated,(req,res)=>{
    var id = req.params.id
    adminController.getCustomerTransaction(id).then(transactions=>{
        response.sendDataSuccess(res,"",transactions)
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

router.post('/addSoldGood',helper.authenticated,(req,res)=>{
    adminController.addSoldGood(req.body).then(good=>{
        response.sendDataSuccess(res,"",good);
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

router.get('/getSoldGood',helper.authenticated,(req,res)=>{
    adminController.getSoldGood().then(goods=>{
        response.sendDataSuccess(res,"",goods);
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

// router.get('/getProfit',helper.authenticated,(req,res)=>{
//     adminController.getProfits().then(profits=>{
//         response.sendDataSuccess(res,"",profits)
//     }).catch(err=>{
//         response.sendDataError(res,err);
//     })
// })

module.exports = router;

