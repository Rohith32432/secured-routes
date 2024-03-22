const express=require('express')
const { addAccounts, getacc } = require('../controllers/UserController')
const router=express.Router()
router.post('/newusers',addAccounts)
router.get('/',getacc)
module.exports =router