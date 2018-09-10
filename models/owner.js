const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ownerSchema = new Schema({
    name:{type:String,required:[true,"Owner name must be supplied"],minlength:[5,"Name must be more than 5 characters"]},
    address:{type:String,required:[true,"Owner Address must be supplied"],minlength:[5,"Address must be more than 5 characters"]},
    contactNumber:{type:Number,validate: {
        validator: function(v) {
            return /\d{10}/.test(v);
        },
        message: '{VALUE} is not a valid phone number!'
        }
    },
    remainingAmount:{type:Number}
})

let Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;