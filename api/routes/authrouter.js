const express  = require('express')
const register = require('../controller/auth')
const login = require('../controller/login')
const getall = require('../controller/getallauth')

const userrouter = express.Router()

userrouter.route('/registerpage').post(register)


userrouter.route('/login').post(login)

userrouter.route('/getall').get(getall)


module.exports = userrouter