const nodemailer = require("nodemailer");
const dotenv=require('dotenv');
const { response } = require("express");
dotenv.config();

const sendEmail=({name,mobile})=>{
    return new Promise ((resolve,reject)=>{
        
            const transporter = nodemailer.createTransport({
                service:"gmail",
                host: "smtp.ethereal.email",
                port: 587,
                secure: false, // true for port 465, false for other ports
                auth: {
                  user: `${process.env.EMAIL}`,
                  pass: `${process.env.PASSWORD}`
                },
                logger: true, 
                debug: true
              });
            
              async function main() {
                const info = await transporter.sendMail({
                  from: `${process.env.EMAIL}`, 
                  to: `${process.env.EMAIL}`, 
                  subject: "Hello ✔", 
                  text: "Hello world?",
                  html: `${name},${mobile}`, 
                });
                console.log("Message sent: %s", info.messageId);
              }
              
              main().catch(console.error);    
         
        }
       
    
    )

}

  //get methode
  const getMail=async (req,res)=>{
    sendEmail(req.query).then(
        (response)=>{response.send(response.message)}
    ).catch(err=>{
        res.status(500).send(err.message)
    })
    res.send(req.query)
    }

module.exports={
    getMail
}