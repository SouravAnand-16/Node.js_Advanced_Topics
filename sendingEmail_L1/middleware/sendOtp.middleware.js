const nodemailer = require("nodemailer");
const otp = generateOTP(6);
// function sendOtp(req, res, next) {
//   if (req.body.otp) {
//     next();
//   } else {
//     const otp = generateOTP(6);
//     sendEmail(req.body.email, otp);
//     res.send("otp send");
//   }
// }
function sendOtp(req, res, next) {
  console.log(req.body);
  if (req.body?.otp) {
    if (req.body.otp == otp) {
      next();
    } else {
      res.status(400).send({
        msg: "Entered wrong otp",
      });
    }
  } else {
    sendEmail(req.body?.email, otp);
    res.cookie("otp", otp);
    res.status(200).send({
      msg: "otp sent successfully",
    });
  }
}
// ubey jzjv jbsp xbuv
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "shlokgaikwad804@gmail.com",
    pass: "ubey jzjv jbsp xbuv",
  },
});
function sendEmail(to, body) {
  const email_data = {
    from: {
      name: "shlok",
      address: "",
    }, // sender address
    to: `${to}`, // list of receivers
    subject: "Hello ✔", // Subject line
    text: body, // plain text body
  };
  transporter
    .sendMail(email_data)
    .then(() => {
      console.log("email sent");
    })
    .catch((err) => {
      console.log("error sending mail", err);
    });
}

function generateOTP(length) {
  const characters = "0123456789";
  let otp = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * characters.length);
    otp += characters[index];
  }
  return otp;
}

module.exports = sendOtp;
