const { Router } = require("express");
const nodemailer = require("nodemailer");
const auth = require("../auth/middleware");
const Event = require("../models").event;
const User = require("../models").user;

const router = new Router();

// send email
router.post("/send", auth, async (req, res, next) => {
  // const organizerName = req.user.name; // add this to params in line 25, 38 and message
  const { message, eventId } = req.body;

  // find all people going to this event
  const event = await Event.findByPk(eventId, {
    include: [{ model: User, as: "attending" }],
  });

  //   console.log(event.get({ plain: true }));

  const attending = event.attending;
  // send them emails.

  const arrayOfPromises = attending.map(
    async (user) => await sendEmail(user.name, user.email, message, event.title)
  );

  await Promise.all(arrayOfPromises);

  res.send("emails sent!");

  try {
  } catch (error) {
    next(error);
  }
});

async function sendEmail(name, email, message, eventTitle) {
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
      subject: `Hey ${name}! Are you coming?`,
      text: `
        You just recieved an email from regarding the event ${eventTitle}
        Message:

        ${message}

----
        Thanks for using Jung!
      `,
    };

    // console.log("mailOptions", mailOptions);

    return await transporter.sendMail(mailOptions, function (error, data) {
      if (error) {
        console.log("Error occured", error);
      } else {
        console.log("Email sent: " + data);
      }
    });
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = router;
