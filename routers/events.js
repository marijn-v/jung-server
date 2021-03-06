const { Router } = require("express");
const auth = require("../auth/middleware");

const Event = require("../models").event;
const User = require("../models").user;
const Venue = require("../models").venue;
const Attender = require("../models").event_user;

const router = new Router();

// get all events
router.get("/", async (req, res, next) => {
  // http://localhost:4000/events
  try {
    const allEvents = await Event.findAll({
      include: [{ model: Venue }],
    });
    res.send(allEvents);
  } catch (e) {
    next(e);
  }
});

router.get("/venues", async (req, res, next) => {
  // http://localhost:4000/events
  try {
    const allVenues = await Venue.findAll();
    res.send(allVenues);
  } catch (e) {
    next(e);
  }
});

// add event + ADD AUTH
router.post("/:id/add", auth, async (req, res, next) => {
  const user = await User.findByPk(req.params.id);
  // console.log("user in backend", user);

  try {
    const { title, image, date, description, link, venueId } = req.body;

    if (!title || !image || !date || !description) {
      return res
        .status(400)
        .send("Please provide title, image url, date and description");
    } else {
      const newEvent = await Event.create({
        title,
        image,
        date,
        description,
        link,
        userId: user.id,
        venueId,
      });
      const fullEvent = await Event.findByPk(newEvent.id, {
        include: [Venue],
      });
      res.json(fullEvent);
    }
  } catch (e) {
    next(e);
  }
});

// add attender to event_user + add AUTH
router.put("/:eventId/user/:userId", async (req, res, next) => {
  const user = await User.findByPk(req.params.userId);
  const event = await Event.findByPk(req.params.eventId);

  try {
    await Attender.create({
      eventId: event.id,
      userId: user.id,
    });
    const attendEvent = await Event.findByPk(req.params.eventId, {
      include: [{ model: User, as: "attending" }],
    });

    res.json(attendEvent);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
