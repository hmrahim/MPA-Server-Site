const express = require("express");
const router = express.Router();
const AcademicGroupController = require("../controllers/academicGroupController");

// Public & Admin Routes for Academic Groups Section
router.get("/", AcademicGroupController.getAcademicGroups);
router.put("/", AcademicGroupController.updateAcademicGroups);
router.post("/group", AcademicGroupController.addGroup);
router.put("/group/:id", AcademicGroupController.updateGroup);
router.delete("/group/:id", AcademicGroupController.deleteGroup);
router.post("/reset", AcademicGroupController.resetAcademicGroups);

module.exports = router;
