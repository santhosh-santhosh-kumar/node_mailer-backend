const router=require('express').Router()
const {postMail,getMail}=require('../controller/mail.controller.js')

router.post('/',postMail)
router.get('/',getMail)
module.exports=router
