const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (message, users) => {
    try {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: users.email,
    subject: "Greetings on your special day",
    text: message,
  };

  const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {

    console.error('Email error:', error);
  }
};
module.exports = sendEmail