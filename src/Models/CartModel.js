const mongoose = require('mongoose')

const CartSchema = mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId, required:true},
    product:{type:mongoose.Schema.Types.ObjectId, required:true},
    quantity:{type:Number,required:true, min:0}
},
{timestamps:true, versionKey:false}
)

const CartModel = mongoose.model('carts', CartSchema);

module.exports = CartModel;