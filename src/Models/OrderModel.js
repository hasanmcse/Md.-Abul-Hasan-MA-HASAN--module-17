
const mongoose =require('mongoose');

const OrderSchema=mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId, required:true, ref:"User"},
    items:[{
        prodct:{type:mongoose.Schema.Types.ObjectId, required:true, ref:"Product"},
        quantity:{type:Number, required:true}
    }],
    totalAmount:{type:Number, required:true, min:0},
    shippingAddress:{type:String, required:true},
    status:{type:String, required:true, default:'Pending'}
  
    },
    {timestamps:true,versionKey:false}
)

const OrderModel=mongoose.model('orders',OrderSchema);
module.exports=OrderModel;
