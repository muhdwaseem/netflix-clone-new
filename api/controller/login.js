const userschema = require('../Model/usermodel')
const bcrypt  =require('bcrypt')
const jwt = require('jsonwebtoken')
const env = require('dotenv')
const login=async(req,res)=>{
    const{email,password} = req.body
    const user = await userschema.findOne({email})
    
if(!email||!password){
    res.status(401).json('enter the details')
    return;
}
const acesstokken = (id)=>jwt.sign({id},process.env.SECRET_KEY,{expiresIn:'2d'})

     if(user){
        const ismatch = await bcrypt.compare(password,user.password)
        if(!ismatch){
            res.status(401).json("wrong password")
        }
        else{
            res.status(201).json({message:"user logged in",token:acesstokken()})
        }
     }
     else{
        res.json("wrong credentials")
     }
  

  






}
module.exports  = login

