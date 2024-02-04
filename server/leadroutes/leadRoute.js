const express=require('express')
const { viewleads, addleads, deleads, populate, viewpopulated } = require('../controllers/leadcontroller')
const router=express.Router()

router.get('/',viewleads)
router.post('/',addleads)
router.delete('/',deleads)
router.put('/',populate)
router.post('/pop',viewpopulated)
module.exports=router