const { Router } = require("express");
// const auth = require("../auth/middleware");

const Event = require("../models").event;
// const User = require("../models").user;
const Venue = require("../models").venue;

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

module.exports = router;
