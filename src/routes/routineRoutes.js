const express = require("express");
const router = express.Router();
const RoutineController = require("../controllers/routineController");

// Public & Admin Routes for Discipline & Routine Section
router.get("/", RoutineController.getRoutine);
router.put("/", RoutineController.updateRoutine);
router.post("/item", RoutineController.addItem);
router.put("/item/:id", RoutineController.updateItem);
router.delete("/item/:id", RoutineController.deleteItem);
router.post("/reset", RoutineController.resetRoutine);

module.exports = router;
