const Submission = require("../models/submissionModel");

// POST Create submission (public form)
exports.createSubmission = async (req, res) => {
  try {
    const { type, ...rest } = req.body;
    if (!type) {
      return res.status(400).json({ success: false, message: "Submission type is required" });
    }

    let trackingNo = rest.appTrackingNo;
    if (type === "admission" && !trackingNo) {
      trackingNo = `MPA-${Math.floor(100000 + Math.random() * 900000)}`;
    }

    const newSub = new Submission({
      type,
      appTrackingNo: trackingNo,
      studentName: rest.studentName || rest.name,
      desiredClass: rest.desiredClass,
      preferredGroup: rest.preferredGroup,
      guardianPhone: rest.guardianPhone || rest.phone,
      name: rest.name,
      email: rest.email,
      phone: rest.phone || rest.guardianPhone,
      subject: rest.subject,
      message: rest.message,
      data: rest,
      status: "new",
    });

    const saved = await newSub.save();
    res.status(201).json({
      success: true,
      data: saved,
      trackingNo,
      message: type === "admission" ? "Admission application submitted successfully" : "Message sent successfully",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// GET Submissions (with type, status query)
exports.getSubmissions = async (req, res) => {
  try {
    const filter = {};
    if (req.query.type) filter.type = req.query.type;
    if (req.query.status) filter.status = req.query.status;

    const subs = await Submission.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, count: subs.length, data: subs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// PATCH Update status or notes
exports.updateSubmission = async (req, res) => {
  try {
    const updated = await Submission.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      return res.status(404).json({ success: false, message: "Submission not found" });
    }
    res.json({ success: true, data: updated, message: "Submission updated successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// DELETE Submission
exports.deleteSubmission = async (req, res) => {
  try {
    const deleted = await Submission.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Submission not found" });
    }
    res.json({ success: true, message: "Submission deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
