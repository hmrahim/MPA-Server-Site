const express = require("express");
const router = express.Router();
const resultController = require("../controllers/resultController");

router.get("/search", resultController.searchResult);
router.get("/", resultController.getResults);
router.get("/:id", resultController.getResultById);
router.post("/", resultController.saveResult);
router.put("/:id", resultController.updateResult);
router.delete("/:id", resultController.deleteResult);
router.post("/seed", resultController.seedResults);

module.exports = router;
