const deleteuser = require('../controller/deleteuser')
const updateuser = require('../controller/userupdate')
const verify = require('../controller/verifytoken')


const router = require('express').Router()

router.route('/userupdate/:id').put(verify,updateuser)
router.route('/deleteuser/:id').delete(verify,deleteuser)


module.exports  = router