const Owner = require('./../models/owner');

const getOwners = () => new Promise((resolve,reject)=>{
    Owner.find({},(err,owners)=>{
        err && reject(err) || resolve(owners);
    })
})

const editOwner = (update) => new Promise((resolve,reject)=>{
    console.log("update",update)
    Owner.findOne({_id:update.id},(err,owner)=>{
        if(err) reject(err);
        owner.name=update.name,
        owner.address=update.address,
        owner.contactNumber = update.contactNumber,
        owner.save((err,ownerData)=>{
            console.log("ownerdata",ownerData)
            err && reject(err) || resolve(ownerData);
        })
    })
})

const postOwner = (data) => new Promise((resolve,reject)=>{
    let ownerData = new Owner(data);
    ownerData.save((err,owner)=>{
        err && reject(err)|| resolve(owner)
    })
})

const deleteOwner = (id) => new Promise((resolve,reject)=>{
    Owner.deleteOne({_id:id},(err,data)=>{
        err && reject(err) || resolve(data)
    })
})

module.exports ={
    getOwners,postOwner, editOwner, deleteOwner
}