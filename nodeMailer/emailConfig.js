const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'vernice.dickens@ethereal.email',
        pass: 'gd3hjHbrvBNcm1GGvj'
    }
});

const sendEmail = (to,from,subject,text,html) =>{
    console.log(to);
    transporter.sendMail({
        to ,
        from ,
        subject ,
        text ,
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