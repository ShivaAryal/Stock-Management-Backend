const Owner = require('./../models/owner');

const getOwners = () => new Promise((resolve,reject)=>{
    Owner.find({},(err,owners)=>{
        err && reject(err) || resolve(owners);
    })
})

const editOwner = (id,update) => new Promise((resolve,reject)=>{
    Owner.findOne({_id:id},(err,owner)=>{
        if(err) reject(err);
        owner.name=update.name,
        owner.address=update.address,
        owner.contactNumber = update.contactNumber,
        owner.email = update.email,
        owner.panNumber = update.panNumber
        owner.save((err,ownerData)=>{
            err && reject(err) || resolve(ownerData);
        })
    })
})

const addOwner = (data) => new Promise((resolve,reject)=>{
    let ownerData = new Owner(data);
    ownerData.save((err,owner)=>{
        err && reject(err)|| resolve(owner)
    })
})

module.exports ={
    getOwners,editOwner,addOwner
}