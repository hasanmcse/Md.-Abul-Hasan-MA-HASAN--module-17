const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, unique:true,required:true, lowercase:true},
    password:{type:String,required:true},
    address:{type:String, default:null},
    phoneNumber:{type:String, default:null}
},
{timestamps:true, versionKey:false}
)

const UserModel = mongoose.model('users', UserSchema);

module.exports=UserModel;