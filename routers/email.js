const { Router } = require("express");
const nodemailer = require("nodemailer");
const auth = require("../auth/middleware");

const router = new Router();

// send email
router.post("/send", auth, async (req, res, next) => {
  console.log("send email?", req.body);
  const { name, message, email } = req.body;
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        // in order for this to work, the user MUST allow "Less secure app" AND disable two-step verification on Google Account
        user: "jung.connect.me@gmail.com", // gmail
        pass: "CONNECTtojung##", // password
      },
    });

    let mailOptions = {
      from: "jung.connect.me@gmail.com", // user gmail
      to: `${email}`, // destination
      subject: `HEY ${name}! Are you coming?`,
      text: `${message}`,
    };

    console.log("mailOptions", mailOptions);

    transporter.sendMail(mailOptions, function (error, data) {
      if (error) {
        console.log("Error occured", error);
      } else {
        console.log("Email sent: " + res.data);
      }
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
