const jwt = require('jsonwebtoken')

function verify(req,res,next) {
    const authtoken = req.headers.authorization;
    if(authtoken){
        const token = authtoken.split(" ")[1]

        jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
            if(err){
                res.status(401).json("token is not valid"
                )

            }
            else{
                req.user = user
                next()
            }
        })

    }
    else{
        return res.status(401).json('you are not authenticated')
    }

}

module.exports = verify