const userschema  = require('../Model/usermodel')

const getall = async(req,res)=>{
    const {username,email,password} = req.body
    const get1 = await userschema.find({})
    res.json(get1)


}

module.exports = getall