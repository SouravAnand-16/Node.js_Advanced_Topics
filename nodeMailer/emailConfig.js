const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'sauravanand324@gmail.com',
        pass: 'pijy jkvx sggg pzrx'
    }
});

const sendEmail = (to,from,subject,text,html) =>{
    transporter.sendMail({
      to,
      from,
      subject,
      text,
      html
    })
    .then(()=>{
        console.log('Email sent');
    })
    .catch((err)=>{
        console.log(err);
    })
};

module.exports = {sendEmail} ;