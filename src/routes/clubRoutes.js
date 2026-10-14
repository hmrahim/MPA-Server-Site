const express = require("express");
const router = express.Router();
const ClubController = require("../controllers/clubController");

// Public & Admin Routes for Clubs Section
router.get("/", ClubController.getClubs);
router.put("/", ClubController.updateClubs);
router.post("/item", ClubController.addItem);
router.put("/item/:id", ClubController.updateItem);
router.delete("/item/:id", ClubController.deleteItem);
router.post("/reset", ClubController.resetClubs);

module.exports = router;
