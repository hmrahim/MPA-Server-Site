const SchoolInfo = require("../models/schoolInfoModel");

// GET School Info
exports.getSchoolInfo = async (req, res) => {
  try {
    let info = await SchoolInfo.findOne();
    if (!info) {
      info = await SchoolInfo.create({});
    }
    res.json({ success: true, data: info });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// PUT Update School Info
exports.updateSchoolInfo = async (req, res) => {
  try {
    let info = await SchoolInfo.findOne();
    if (!info) {
      info = new SchoolInfo(req.body);
    } else {
      Object.assign(info, req.body);
    }
    const saved = await info.save();
    res.json({ success: true, data: saved, message: "School information updated successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
