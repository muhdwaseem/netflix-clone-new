const userschema = require('../Model/usermodel')


const deleteuser = async(req,res)=>{
    const id = req.params.id
    if(req.user.id===req.params.id){
        try {
            const deletedata = await userschema.findByIdAndRemove({_id:id})
            res.status(201).json("data deleted")



        } catch (error) {
            res.status(500).json(error)
        }
    }
    else{
        res.status(403).json("you can only delete data in your account")
    }
   



}


module.exports = deleteuser