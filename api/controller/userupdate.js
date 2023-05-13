const userschema = require('../Model/usermodel')
const bcrypt = require('bcrypt')

const updateuser = async(req,res)=>{
const {username,email,password} = req.body
const id = req.params.id
const upd = await userschema.findByIdAndUpdate(id,{username,email,password})
if(upd){
    res.status(201).json("data updated")
}
else{
    res.status(500).json("data not updates")
}


}




module.exports = updateuser