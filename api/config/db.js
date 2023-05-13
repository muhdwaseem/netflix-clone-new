const mongoose = require('mongoose')
const env = require('dotenv')

const connectDb=async(req,res)=>{
    try {
     const connect = await   mongoose.connect(process.env.MONGO_URL ,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            
        }).then(()=>console.log('database connected'))
    } catch (error) {
        console.log(`error ${error}`)
        process.exit()
    }
   
}

module.exports = connectDb