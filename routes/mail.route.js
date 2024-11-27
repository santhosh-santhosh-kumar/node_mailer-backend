const router=require('express').Router()
const {getMail}=require('../controller/mail.controller.js')


router.get('/',getMail)
module.exports=router
