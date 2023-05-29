const mongoose =  require('mongoose')

const usermodel = mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    profilepic:{type:String,default:""},
    isAdmin:{type:String,default:false}
},{timestamps:true})

const userschema = mongoose.model('user',usermodel)

module.exports = userschema