const express = require("express");
const router = express.Router();
const HeadmasterController = require("../controllers/headmasterController");

// Public & Admin routes for Headmaster Section
router.get("/", HeadmasterController.getHeadmaster);
router.put("/", HeadmasterController.updateHeadmaster);
router.post("/reset", HeadmasterController.resetHeadmaster);
router.post("/upload-image", HeadmasterController.uploadImage);

module.exports = router;
