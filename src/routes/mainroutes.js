const express = require("express");
const router = express.Router();
const controller = require("../controllers/mainController");

const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

router.get("/", controller.index);
router.get("/services", controller.services);
router.get("/contact", controller.contact);

module.exports = router;

