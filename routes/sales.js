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

router.post('/editChamalSale',helper.authenticated,(req,res)=>{
    chamalController.editChamalSale(req.body).then(sales=>{
        response.sendDataSuccess(res,"",sales)
    }).catch(err=>{
        response.sendDataError(res,err)
    })
})

router.post('/deleteChamalSale',helper.authenticated,(req,res)=>{
    console.log("id",req.body.id)
    chamalController.deleteChamalSale(req.body.id).then(sales=>{
        response.sendDataSuccess(res,"",sales)
    }).catch(err=>{
        response.sendDataError(res,err)
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

router.post('/editKanikaSale',helper.authenticated,(req,res)=>{
    kanikaController.editKanikaSale(req.body).then(sales=>{
        response.sendDataSuccess(res,"",sales)
    }).catch(err=>{
        response.sendDataError(res,err)
    })
})

router.post('/deleteKanikaSale',helper.authenticated,(req,res)=>{
    kanikaController.deleteKanikaSale(req.body.id).then(sales=>{
        response.sendDataSuccess(res,"",sales)
    }).catch(err=>{
        response.sendDataError(res,err)
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

router.post('/editBranSale',helper.authenticated,(req,res)=>{
    branController.editBranSale(req.body).then(sales=>{
        response.sendDataSuccess(res,"",sales)
    }).catch(err=>{
        response.sendDataError(res,err)
    })
})

router.post('/deleteBranSale',helper.authenticated,(req,res)=>{
    branController.deleteBranSale(req.body.id).then(sales=>{
        response.sendDataSuccess(res,"",sales)
    }).catch(err=>{
        response.sendDataError(res,err)
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

router.post('/editBhushSale',helper.authenticated,(req,res)=>{
    bhushController.editBhushSale(req.body).then(sales=>{
        response.sendDataSuccess(res,"",sales)
    }).catch(err=>{
        response.sendDataError(res,err)
    })
})

router.post('/deleteBhushSale',helper.authenticated,(req,res)=>{
    bhushController.deleteBhushSale(req.body.id).then(sales=>{
        response.sendDataSuccess(res,"",sales)
    }).catch(err=>{
        response.sendDataError(res,err)
    })
})

router.get('/monthlySales',helper.authenticated,(req,res)=>{
    monthController.getMonthlySales().then(sales=>{
        response.sendDataSuccess(res,"",sales);
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

router.get('/chamalMonthlySales',helper.authenticated,(req,res)=>{
    chamalController.getChamalMonthlySales().then(sales=>{
        response.sendDataSuccess(res,"",sales)
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

router.get('/kanikaMonthlySales',helper.authenticated,(req,res)=>{
    kanikaController.getKanikaMonthlySales().then(sales=>{
        response.sendDataSuccess(res,"",sales)
    }).catch(err=>{
        response.sendDataError(res,err);
    })
})

router.get('/branMonthlySales',helper.authenticated,(req,res)=>{
    branController.getBranMonthlySales().then(sales=>{
        response.sendDataSuccess(res,"",sales)
    }).catch(err=>{
        response.sendDataError(res,err)
    })
})

router.get('/bhushMonthlySales',helper.authenticated,(req,res)=>{
    bhushController.getBhushMonthlySales().then(sales=>{
        response.sendDataSuccess(res,"",sales)
    }).catch(err=>{
        response.sendDataError(res,err)
    })
})

module.exports = router;