const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs')
const secret = 'shiva'
const nodeMailer = require('nodemailer');

const Admin = require('./../models/admin');

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjMTY4NGU3ODQ4NGFlMjg1Y2I0MjAxZSIsImlhdCI6MTU0NDk3OTgxMH0.kyAOrnMq6if_p24F4_OoNAdmUHq8Ll48oqzKGqnxxmI

const adminLogin = (email,password) => new Promise((resolve,reject)=>{
    Admin.findOne({email:email},(err,admin)=>{
        if(err) reject(err);
        if(admin){
            var passwordIsValid = bcrypt.compareSync(password,admin.password);
            if(!passwordIsValid){
                reject("Email/Passwword doesn't match")
            }else{
                token = jwt.sign({id:admin._id},secret);
                let adminObj = {
                    token,
                    name:admin.name
                }
                console.log(token)
                resolve(adminObj);
            }
        }
    })
})

const addAdmin = (admin) => new Promise((resolve,reject)=>{
    let adminData = new Admin(admin);
    adminData.save((err,myAdmin)=>{
        let transporter = nodeMailer.createTransport({
            service:'gmail',
            auth:{
                user:'hostelappinfo@gmail.com',
                pass:'randompassword'
            }
        });
    
        let mailOptions ={
            from : 'hostelappinfo@gmail.com',
            to : admin.email,
            subject:'Your Password for Stock Management Admin is',
            text:admin.password 
        };
    
        transporter.sendMail(mailOptions,(err,info)=>{
            if(err){
                reject(err);
            }else{
                resolve("Email sent:"+info.response);
            }
        })
        err && reject(err) || resolve(myAdmin);
    })
})

const getAdmin  = () => new Promise((resolve,reject)=>{
    Admin.find({},(err,admins)=>{
        err && reject(err) || resolve(admins);
    })
})

const editPassword = (id,oldPassword,newPassword) => new Promise((resolve,reject)=>{
    Admin.findOne({_id:id},(err,admin)=>{
        if(err) reject(err)
        if(admin){
            const oldPasswordisValid=bcrypt.compareSync(oldPassword,admin.password)
            if(!oldPasswordisValid){
                reject("Old password doesn't match")
            }else{
                admin.password=newPassword;
                admin.save((err,myAdmin)=>{
                    err && reject(err) || resolve(myAdmin);
                })
            }
        }
    })
})

// const addPurchaser = (owner) => new Promise((resolve,reject)=>{
//     let ownerData = new Owner(owner);
//     ownerData.save((err,myOwner)=>{
//         err && reject(err) || resolve(myOwner);
//     })
// })

// const getPurchaser = () => new Promise((resolve,reject)=>{
//     Owner.find({},(err,owners)=>{
//         err && reject(err) || resolve(owners);
//     })
// })

// const addBoughtGood = (good) => new Promise((resolve,reject)=>{
//     let boughtGoodData = new BoughtGood(good);
//     boughtGoodData.save((err,myGood)=>{
//         Owner.findOne({_id:good.owner},(err,owner)=>{
//             if(err) reject(err);
//             owner.remainingAmount+=good.remainingAmount;
//             owner.save((err,theOwner)=>{
//                 err && reject(err) || resolve(myGood);
//             })
//         })
//     })
// })

// const getBoughtGood = () => new Promise((resolve,reject)=>{
//     BoughtGood.find({},(err,myGoods)=>{
//         err && reject(err) || resolve(myGoods);
//     })
// })

// const addCustomer = (customer) => new Promise((resolve,reject)=>{
//     let customerData = new Customer(customer);
//     customerData.save((err,myCustomer)=>{
//         err && reject(err) || resolve(myCustomer);
//     })
// })

// const getCustomer = () => new Promise((resolve,reject)=>{
//     Customer.find({},(err,customers)=>{
//         err && reject(err) || resolve(customers);
//     })
// })

// const getCustomerTransaction = (id) => new Promise((resolve,reject)=>{
//     SoldGood.find({customer:id},(err, transactions)=>{
//         err && reject(err) || resolve(transactions);
//     })
// })

// const addSoldGood = (good) => new Promise((resolve,reject)=>{
//     let soldGoodData = new SoldGood(good);
//     soldGoodData.save((err,myGood)=>{
//         if(err) reject(err);
//         Customer.findOne({_id:good.customer},(err,myCustomer)=>{
//             if(err) reject(err);
//             console.log(myCustomer);
//             myCustomer.remainingAmount+=good.remainingAmount
//             myCustomer.save((err,theCustomer)=>{
//                 err && reject(err) || resolve(myGood);
//             })
//         })
//     })
// })

// const getSoldGood= () => new Promise((resolve,reject)=>{
//     SoldGood.find({},(err,goods)=>{
//         err && reject(err)|| resolve(goods);
//     })
// })

// // const getCustomerSoldGood = (id) => new Promise((resolve,reject)=>{
// //     SoldGood.find({})
// // })

module.exports={
    adminLogin,addAdmin,getAdmin,editPassword
}