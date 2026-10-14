const express = require("express");
const router = express.Router();
const NoticeController = require("../controllers/noticeController");

// Public & Admin Routes for Notices & School Pad
router.get("/", NoticeController.getNotices);
router.put("/", NoticeController.updateNotices);
router.put("/pad-config", NoticeController.updatePadConfig);
router.post("/item", NoticeController.addItem);
router.put("/item/:id", NoticeController.updateItem);
router.delete("/item/:id", NoticeController.deleteItem);
router.post("/reset", NoticeController.resetNotices);

module.exports = router;
