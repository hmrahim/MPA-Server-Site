const express = require("express");
const router = express.Router();
const schoolInfoController = require("../controllers/schoolInfoController");

router.get("/", schoolInfoController.getSchoolInfo);
router.put("/", schoolInfoController.updateSchoolInfo);

module.exports = router;
