const express = require("express");
const router = express.Router();
const topperController = require("../controllers/topperController");

router.get("/", topperController.getToppers);
router.get("/:id", topperController.getTopperById);
router.post("/", topperController.createTopper);
router.put("/:id", topperController.updateTopper);
router.delete("/:id", topperController.deleteTopper);
router.post("/reset", topperController.resetToppers);

module.exports = router;
