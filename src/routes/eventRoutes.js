const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

// Page configuration routes (word to word bilingual banner and section headings)
router.get("/page-config", eventController.getPageConfig);
router.put("/page-config", eventController.updatePageConfig);
router.post("/page-config/reset", eventController.resetPageConfig);

// Upload image to ImgBB
router.post("/upload-image", eventController.uploadImage);

// Events routes
router.get("/", eventController.getEvents);
router.post("/", eventController.createEvent);
router.put("/:id", eventController.updateEvent);
router.delete("/:id", eventController.deleteEvent);
router.post("/reset", eventController.resetEvents);

// Gallery routes attached or accessible
router.get("/gallery/all", eventController.getGallery);
router.post("/gallery/item", eventController.createGalleryItem);
router.put("/gallery/item/:id", eventController.updateGalleryItem);
router.delete("/gallery/item/:id", eventController.deleteGalleryItem);
router.post("/gallery/reset", eventController.resetGallery);

module.exports = router;
