const nodemailer = require("nodemailer");
const dotenv=require('dotenv')
dotenv.config();
console.log(typeof(process.env.EMAIL),typeof(process.env.PASSWORD))
const transporter = nodemailer.createTransport({
    service:"gmail",
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: `${process.env.EMAIL}`,
      pass: `${process.env.PASSWORD}`
    },
  });

  async function main() {
    const info = await transporter.sendMail({
      from: 'hrkonceptsdandd@gmail.com', // sender address
      to: "hrkonceptsdandd@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
    console.log("Message sent: %s", info.messageId);
  }
  
  main().catch(console.error);
const postMail=async (req,res)=>{
res.json('posted')
}

const getMail=async (req,res)=>{
    res.send('posted')
    }

module.exports={
    postMail,
    getMail
}