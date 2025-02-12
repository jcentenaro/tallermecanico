const express = require("express");
const router = express.Router();
const controller = require("../controllers/mainController");

const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

router.get("/about", controller.about);
router.get("/booking", controller.booking);
router.get("/contact", controller.contact);
router.get("/", controller.index);
router.get("/services", controller.services);
router.get("/team", controller.team);
router.get("/testimonial", controller.testimonial);

module.exports = router;

