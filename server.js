const express=require("express")
const mail =require('./routes/mail.route.js')
const app=express()
app.use(express.json())
const PORT=3001

app.use('/',mail)
app.listen(3001,()=>{
    console.log("server is on PORT "+PORT)
})
