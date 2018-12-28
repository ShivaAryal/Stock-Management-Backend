const router = require('express').Router();
const response = require('./../utils');
const helper = require('./../utils/helper');

const expenseController = require('./../controllers/expenses')

router.get('/',helper.authenticated,(req,res)=>{
    expenseController.getExpense().then(expense=>{
        response.sendDataSuccess(res,"",expense)
    }).catch(err=>{
        response.sendDBError(res,err);
    })
})

router.post('/',helper.authenticated,(req,res)=>{
    expenseController.addExpense(req.body).then(expense=>{
        response.sendDataSuccess(res,"",expense)
    }).catch(err=>{
        response.sendDBError(res,err)
    })
})

router.get('/monthlyExpenses',helper.authenticated,(req,res)=>{
    expenseController.getMonthlyExpenses().then(expenses=>{
        response.sendDataSuccess(res,"",expenses)
    }).catch(err=>{
        response.sendDBError(res,err)
    })
})

router.get('/profit',helper.authenticated,(req,res)=>{
    expenseController.getMonthlyProfits().then(profits=>{
        response.sendDataSuccess(res,"",profits)
    }).catch(err=>{
        response.sendDBError(res,err)
    })
})

module.exports = router;