const express = require("express");
const router = express.Router();
const FacilityController = require("../controllers/facilityController");

// Public & Admin Routes for Facilities Section
router.get("/", FacilityController.getFacilities);
router.put("/", FacilityController.updateFacilities);
router.post("/item", FacilityController.addItem);
router.put("/item/:id", FacilityController.updateItem);
router.delete("/item/:id", FacilityController.deleteItem);
router.post("/reset", FacilityController.resetFacilities);

module.exports = router;
