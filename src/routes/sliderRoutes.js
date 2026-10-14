const express = require("express");
const router = express.Router();
const SliderController = require("../controllers/sliderController");

// Public routes for sliders
router.get("/active", SliderController.getActiveSliders);
router.post("/seed", SliderController.seedDefaultSliders);
router.put("/reorder", SliderController.reorderSliders);
router.post("/upload-image", SliderController.uploadImage);

// CRUD routes
router.get("/", SliderController.getAllSliders);
router.get("/:id", SliderController.getSliderById);
router.post("/", SliderController.createSlider);
router.put("/:id", SliderController.updateSlider);
router.delete("/:id", SliderController.deleteSlider);

module.exports = router;
