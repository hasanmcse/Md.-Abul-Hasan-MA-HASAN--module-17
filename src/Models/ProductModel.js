
const mongoose =require('mongoose');

const ProductSchema=mongoose.Schema({
        name:{type:String,required:true},
        description:{type:String},
        price:{type:Number,required:true, min:0},
        stock:{type:Number, required:true, min:0},
        category:{type:String, required:true},
        image:{type:String, required:false}
       
    },
    {timestamps:true,versionKey:false}
)

const ProductModel=mongoose.model('products',ProductSchema);
module.exports=ProductModel;
