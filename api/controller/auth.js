const userschema  = require('../Model/usermodel')
const bcrypt = require('bcrypt') 

const register =async(req,res)=>{
    const{username,password,email} = req.body
    
        
// const salt = await bcrypt.genSalt(10)
// const hashpassword = await bcrypt.hash(password,salt)
//         const add  = await userschema.create({username,password:hashpassword,email}) 
//         res.status(201).json(add)
   
        const salt = await bcrypt.genSalt(10)
        const hashpassword = await bcrypt.hash(password,salt)
        const create1 = await userschema.create({username,password:hashpassword,email})
        res.json(create1)



}
module.exports = register